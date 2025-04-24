<template>
  <main class="EventCreationComponent">
    <button class='back-button' onclick="history.back()"> Volver</button>
    <article class="background">
      <form class="form" @submit.prevent="eventSubmitted">
        <h1 class="title">Create your event!</h1>

        <v-text-field
            v-model="eventName"
            label="Event Name"
            class="field name-field"
            placeholder="Event Name"
        />

        <section class="attendees-price">
          <v-text-field
              v-model="maximumAttendees"
              type="number"
              label="Maximum Attendees"
              class="field maxAtt-field"
              placeholder="Maximum Attendees"
              @input="validateMaximumAttendees"
          />

          <v-text-field
              v-model="price"
              type="number"
              label="Price"
              class="field price-field"
              placeholder="Price (in €)"
              @input="validatePrice"
          />
        </section>

        <v-textarea
            v-model="description"
            label="Description"
            class="field description-field"
        />

        <section class="location-selects">
          <v-autocomplete
              v-model="country.value.value"
              class="input-field country-select"
              :error-messages="country.errorMessage.value"
              :items="countries"
              label="Select a country"
              item-title="name"
              item-value="id"
              @update:model-value="updateProvinces"
              clearable
          ></v-autocomplete>

          <v-autocomplete
              v-model="province.value.value"
              class="input-field province-select"
              :error-messages="province.errorMessage.value"
              :items="filteredProvinces"
              label="Select a province"
              item-title="name"
              item-value="id"
              @update:model-value="updateCities"
              clearable
          ></v-autocomplete>

          <v-autocomplete
              v-model="city.value.value"
              class="input-field location-select"
              :error-messages="city.errorMessage.value"
              :items="filteredCities"
              label="Select a location"
              item-title="name"
              item-value="id"
              clearable
          ></v-autocomplete>
        </section>

        <section class="date-time">
          <v-text-field
              v-model="date"
              type="date"
              :min="currentDate"
              label="Select a date"
          ></v-text-field>

          <v-text-field
              v-model="time"
              type="time"
              :min="isToday ? currentTime : null"
              label="Select a time"
          ></v-text-field>
        </section>

        <v-file-input
            v-model="image"
            accept="image/*"
            label="Upload an image for the event"
        />

        <section class="final-section">
          <v-switch
              v-model="privateEvent"
              label="Private Event"
              class="privacy-field"
              color="green"
          />

          <button
              class="submit-button"
              type="submit"
          >
            Create event
          </button>
        </section>
      </form>
    </article>
  </main>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import {Event} from '@/interfaces/event';
import {City, Country, State} from "@/interfaces/locations";
import countriesData from '@/assets/countries.json'
import statesData from '@/assets/states.json'
import citiesData from '@/assets/cities.json'
import {useField} from "vee-validate";
import {useAuthStore} from '@/stores/auth';
import {useEventStore} from '@/stores/events';


const authStore = useAuthStore();
const eventStore = useEventStore();

const eventName = ref<string>('');
const maximumAttendees = ref<string>('');
const description = ref<string>('');
const date = ref<string>('');
const time = ref<string>('');

const now = new Date();
const currentDate = ref(now.toISOString().split('T')[0]);
const currentTime = ref(now.toTimeString().split(':').slice(0, 2).join(':'));
const isToday = computed(() => date.value === currentDate.value);

const realDate = ref<Date>(new Date());
const price = ref<string>('');

const country = useField<string>('country')
const province = useField<string>('province')
const city = useField<string>('city')

const privateEvent = ref<boolean>(false);
const image = ref<File | undefined>(undefined);

const filteredProvinces = ref<State[]>([])
const filteredCities = ref<City[]>([])

const countries: Country[] = countriesData[2]?.data || []
const states: State[] = statesData[2]?.data || []
const cities: City[] = citiesData[2]?.data || []

function validateMaximumAttendees(value: string) {
  const numericValue = parseInt(value, 10);
  if (numericValue < 0) {
    maximumAttendees.value = '0'; // Establece el valor a 0 si es negativo
  }
}

function validatePrice(value: string) {
  const numericValue = parseFloat(value);
  if (numericValue < 0) {
    price.value = '0';
  }
}

function updateProvinces(countryId: string) {
  // Filtrar provincias basadas en el countryId
  filteredProvinces.value = states.filter(state => state.countryId === countryId);
  if (filteredProvinces.value.length === 0) {
    province.value.value = 'No provinces available'; // Accede a .value correctamente
    city.value.value = 'No cities available';       // Accede a .value correctamente
  } else {
    province.value.value = ''; // Reinicia el valor
    city.value.value = '';     // Reinicia el valor
  }
}

function updateCities(stateId: string) {
  // Filtrar ciudades basadas en el stateId
  filteredCities.value = cities.filter(city => city.stateId === stateId);
  if (filteredCities.value.length === 0) {
    city.value.value = 'No cities available'; // Accede a .value correctamente
  } else {
    city.value.value = ''; // Reinicia el valor
  }
}

function validateFields() {
  if (!eventName.value || !maximumAttendees.value || !city.value ||
      !description.value || !date.value || !time.value || !price.value) {
    console.error('Please fill in all fields');
    return false;
  }
  return true;
}

function parseDateTime(date: string, time: string): Date {
  const [year, month, day] = date.split('-').map(Number);
  const [hours, minutes] = time.split(':').map(Number);
  const parsedDate = new Date(year, month - 1, day, hours, minutes);
  return parsedDate;
}

const emit = defineEmits<{
  (e: 'eventCreated', eventData: Event, image: File | undefined): void
}>()

function eventSubmitted() {

  if (!validateFields()) {
    return;
  }

  const celebrationDate = parseDateTime(date.value, time.value);
  // Encuentra la ciudad seleccionada usando el ID almacenado en city.value
  const selectedCity = filteredCities.value.find(cityItem => cityItem.id === city.value.value);
  const cityName = selectedCity ? selectedCity.name : 'Not specified';

  const eventData: Event = {
    id: crypto.randomUUID(),
    ownerId: authStore.user?.id || 'unknown',
    name: eventName.value,
    maximumAttendees: parseInt(maximumAttendees.value),
    description: description.value,
    creationTime: new Date(),
    price: parseFloat(price.value),
    location: cityName,
    celebrationDate: celebrationDate,
    privateEvent: privateEvent.value,
  };

  emit('eventCreated', eventData, image.value); 
}

</script>

<style scoped lang="css">
.EventCreationComponent {
  width: 100vw;
}

.background {
  padding: 5em 0 5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  background-color: var(--third-color);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  gap: .5em;
  padding: 2em 2em 0 2em;
  width: 45em;

}

.title {
  color: var(--first-color);
  align-self: center;

  position: relative;
  bottom: 9px;

}

.field {
  color: var(--first-color);
}

.field::placeholder {
  color: var(--third-color);
}

/* Eliminar las flechas de los inputs de número */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Para Firefox */
}

.description-field {
  height: 15em;
}

.attendees-price {
  display: flex;
  gap: 1em;
}

.date-time {
  display: flex;
  gap: 1em;

}

.final-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.submit-button {
  background-color: var(--accent-one);
  color: var(--third-color);
  border: none;

  height: 3em;

  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, .7);

}

.submit-button:hover {
  background-color: var(--accent-two);
}

.location-selects {
  display: flex;
  gap: 1em;
  width: 100%;
}

.country-select {
  flex: 1;
}

.province-select {
  flex: 1;
}

.location-select {
  flex: 1;
}
</style>