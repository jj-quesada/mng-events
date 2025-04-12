<template>
  <form class="register-form-container" @submit.prevent="submit">
    <v-text-field
        v-model="name.value.value"
        class="input-field"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Name"
    ></v-text-field>

    <v-menu v-model="menu" class="input-field" :close-on-content-click="false">
      <template #activator="{ props }">
        <v-text-field
            v-bind="props"
            v-model="formattedDate"
            :error-messages="birthday.errorMessage.value"
            label="Date of birth"
            readonly
        ></v-text-field>
      </template>
      <v-date-picker
          v-model="selectedDate"
          @update:model-value="updateDate"
          :type="'date'"
      ></v-date-picker>
    </v-menu>

    <v-text-field
        v-model="phone.value.value"
        class="input-field"
        :counter="9"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
    ></v-text-field>

    <v-text-field
        v-model="email.value.value"
        class="input-field"
        :error-messages="email.errorMessage.value"
        label="Email"
    ></v-text-field>

    <v-text-field
        v-model="password.value.value"
        class="input-field"
        :error-messages="password.errorMessage.value"
        label="Password"
        type="password"
    ></v-text-field>

    <v-select
        v-model="country.value.value"
        class="input-field"
        :error-messages="country.errorMessage.value"
        :items="countries"
        label="Select country"
        item-title="name"
        item-value="id"
        @update:model-value="updateProvinces"
    ></v-select>

    <v-select
        v-model="province.value.value"
        class="input-field"
        :error-messages="province.errorMessage.value"
        :items="filteredProvinces"
        label="Select province"
        item-title="name"
        item-value="id"
        @update:model-value="updateCities"
    ></v-select>

    <v-select
        v-model="city.value.value"
        class="input-field"
        :error-messages="city.errorMessage.value"
        :items="filteredCities"
        label="Select city"
        item-title="name"
        item-value="id"
    ></v-select>

    <v-checkbox
        v-model="checkbox.value.value"
        class="input-field"
        :error-messages="checkbox.errorMessage.value"
        label="I accept all terms & conditions."
        type="checkbox"
        :value="true"
    ></v-checkbox>

    <div class="input-buttons">
      <button
          class="login-button"
          type="submit"
      >
        Register Now
      </button>

      <button class="login-button" @click="handleReset">
        Clear Fields
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {useField, useForm} from 'vee-validate'
import countriesData from '@/assets/countries.json'
import statesData from '@/assets/states.json'
import citiesData from '@/assets/cities.json'
import {Country, State, City} from '@/interfaces/locations'


const emit = defineEmits(['signUpSubmitted']);

function signUpSubmitted(authUser : AuthUser, password : string, userProfile: UserProfile) {
  emit('signUpSubmitted', { authUser, password, userProfile })
}

const countries: Country[] = countriesData[2]?.data || []
const states: State[] = statesData[2]?.data || []
const cities: City[] = citiesData[2]?.data || []

const menu = ref(false)
const selectedDate = ref<Date | null>(null)
const formattedDate = computed(() =>
    selectedDate.value ? selectedDate.value.toISOString().split('T')[0] : ''
)

const {handleSubmit, handleReset} = useForm({
  validationSchema: {
    name(value: string) {
      if (value?.length >= 2) return true

      return 'Name needs to be at least 2 characters.'
    },
    birthday(value: string) {
      return /^\d{4}-\d{2}-\d{2}$/.test(value) || 'Must be a valid date (YYYY-MM-DD).'
    },
    password(value: string) {
      if (value?.length >= 6) return true

      return 'Password needs to be at least 6 characters.'
    },
    phone(value: string) {
      if (/^[0-9-]{9}$/.test(value)) return true

      return 'The phone number must have 9 digits.'
    },
    email(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    country(value: string) {
      if (value) return true

      return 'Select a country.'
    },
    province(value: string) {
      if (value) return true

      return 'Select a province.'
    },
    city(value: string) {
      if (value) return true

      return 'Select a city.'
    },
    checkbox(value: boolean) {
      if (value) return true

      return 'You must select this box to register.'
    },
  },
})

const name = useField<string>('name')
const birthday = useField<string>('birthday')
const phone = useField<string>('phone')
const email = useField<string>('email')
const password = useField<string>('password')
const country = useField<string>('country')
const province = useField<string>('province')
const city = useField<string>('city')
const checkbox = useField<boolean>('checkbox', {initialValue: false})
const filteredProvinces = ref<State[]>([])
const filteredCities = ref<City[]>([])

function updateProvinces(countryId: string) {
  // Filter provinces based in countryId
  filteredProvinces.value = states.filter(state => state.countryId === countryId)
  if (filteredProvinces.value.length === 0) {
    province.value.value = 'No provinces available'
    city.value.value = 'No cities available'
  }
  province.value.value = ''
  city.value.value = ''
}

function updateCities(stateId: string) {
  // Filter cities based in stateId
  filteredCities.value = cities.filter(city => city.stateId === stateId)
  if (filteredCities.value.length === 0) {
    city.value.value = 'No cities available'
  }
  city.value.value = ''
}

function updateDate(val: Date | null) {
  if (val) {
    selectedDate.value = val
    birthday.value.value = val.toISOString().split('T')[0]
  } else {
    selectedDate.value = null
    birthday.value.value = ''
  }
  menu.value = false
}



const submit = handleSubmit(values => {
  // Create AuthUser and UserProfile objects from the form values
  const authUser: AuthUser = {
    user_id: '', // Can be set when the user is created in Supabase
    email: values.email,
    phone: values.phone,
  }

  const birthDate = new Date(values.birthday);

  const userProfile: UserProfile = {
    user_id: '', // Can be set when the user is created in Supabase
    username: values.name,
    date_of_birth: birthDate,
    country: values.country,
    province: values.province,
    city: values.city,
    role: 'user', // You can adjust this based on your needs
  }

  signUpSubmitted(authUser, values.password, userProfile)
})
</script>

<style scoped lang="css">
.login-button {
  width: 80%;
  height: 3em;
  margin: 1em 0;
  border: 1px solid #808080;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

.login-button:hover {
  background-color: #918e8e;
}

.input-field {
  width: 80%;
  padding: 2px;
}

.v-menu .input-field {
  width: 100%;
}

.v-text-field {
  width: 100%;
}

.register-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: 80%;
  gap: 1em; /* Adjust the gap value as needed */
}
</style>