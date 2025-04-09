<template>
  <main class="EventCreationComponent">
    <article class="background">
      <form class="form">
        <h1 class="title">Create your event!</h1>

        <input
            v-model="eventName"
            label="Event Name"
            class="field name-field"
            placeholder="Event Name"
        />

        <input
            v-model="maximumAttendees"
            label="Maximum Attendees"
            class="field maxAtt-field"
            placeholder="Maximum Attendees"
        />

        <textarea
            v-model="description"
            label="Description"
            class="field description-field"
            placeholder="Description"
        />

        <input
            v-model="price"
            label="Price"
            class="field price-field"
            placeholder="Price"
        />
        <section class="datetime-content">
          <input
              v-model="date"
              label="Date"
              type="date"
              class="field date-field"
          />

          <input
              v-model="time"
              label="Time"
              type="time"
              class="field time-field"
          />

        </section>

        <section class="privacy-content">
          <label>Is the event private?</label>
          <input
              v-model="privateEvent"
              label="Private"
              type="checkbox"
              class="privacy-field"
          />
        </section>

        <!-- Imagen del evento -->
        <v-file-input
            v-model="imageFile"
            accept="image/*"
            label="Upload Image"
            @change="onImageChange"
        />

        <!-- Mostrar recorte de imagen si se ha seleccionado una -->
        <section v-if="imagePreview" class="image-preview">
          <h3>Crop Image</h3>
          <vue-cropper
              v-model="croppedImage"
              :src="imagePreview"
              :aspect-ratio="1"
              :auto-crop="true"
              :auto-crop-area="1"
          />
        </section>

        <button
            class="submit-button"
            type="submit"
            @click="eventSubmitted"
        >
          Create event
        </button >
      </form>
    </article>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VFileInput } from 'vuetify/components/VFileInput';
import VueCropper from 'vue-cropperjs';
import '@/assets/cropper.min.css';

const eventName = ref<string>('');
const maximumAttendees = ref<string>('');
const description = ref<string>('');
const date = ref<string>('');
const time = ref<string>('');
const price = ref<string>('');
const privateEvent = ref<boolean>(false);

const imageFile = ref<File | null>(null);
const imagePreview = ref<string | null>(null); // Vista previa de la imagen
const croppedImage = ref<string>(''); // Imagen recortada

function eventSubmitted(): void {
  console.log('event created', {eventName: eventName.value, image: croppedImage.value})
}

// Función para manejar el cambio de imagen
const onImageChange = () => {
  if (imageFile.value) {
    const reader = new FileReader();

    // Usamos el evento onload para obtener la URL de la imagen una vez cargada
    reader.onload = (e) => {
      // Aquí tenemos el URL de la imagen
      const imageUrl = e.target?.result as string;
      console.log('Imagen cargada:', imageUrl);
    };

    // Verificamos que la imagen sea un archivo válido
    if (imageFile.value instanceof Blob) {
      reader.readAsDataURL(imageFile.value);
    } else {
      console.error('El archivo no es válido.');
    }
  }
};
</script>

<style scoped lang="css">
.EventCreationComponent {
  width: 100vw;
}

.background {
  padding-top: 5em;
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

  gap: 1em;
  padding: 2em;
  width: 50vw;

}

.title {
  color: var(--third-color);
  align-self: center;

  position: relative;
  bottom: 9px;

  background-color: var(--second-color);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, .7);
}

.field {
  color: var(--third-color);
  opacity: .95;

  background-color: var(--first-color);
  border-radius: 5px;

  padding: 6px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, .7);
}

.field::placeholder {
  color: var(--third-color);
}

.description-field {
  height: 15em;
}

.datetime-content {
  display: flex;
  gap: 5px;

}

.date-field, .time-field {
  width: 50%;
  color: var(--third-color);
  appearance: none;
}

.privacy-content {
  display: flex;
  gap: 5px;
  color: var(--first-color);
}

.submit-button {
  align-self: self-end;
  background-color: var(--accent-one);
  color: var(--third-color);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, .7);

}

.submit-button:hover {
  background-color: var(--accent-two);
}

</style>