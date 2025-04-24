<template>
  <main class="EventDetailsComponent">
    <button class="back-button" onclick="history.back()">Volver</button>
    <div v-if="selectedEvent" class="event-details-container">
      <img :src="selectedEvent.imageURL || defaultImage" alt="Event Image" class="event-image-large" />
      <div class="event-info">
        <h1 class="event-title">{{ selectedEvent.name }}</h1>
        <h2 class="event-organizer">Created by: {{ selectedEvent.ownerName }}</h2>
        <p class="event-description">{{ selectedEvent.description }}</p>
        <p class="event-location">✦ {{ selectedEvent.location }}</p>
        <p class="event-date">
          {{ new Date(selectedEvent.celebrationDate).toLocaleString('en-EN', { dateStyle: 'long', timeStyle: 'short' }) }}
        </p>
        <p v-if="selectedEvent.price && selectedEvent.price > 0" class="event-price">
          {{ selectedEvent.price }} €
        </p>
        <p v-else class="event-price">FREE</p>
      </div>
    </div>
    <p v-else class="event-details-container no-event-message">No event information found.</p>
  </main>
</template>

<script setup lang="ts">
import { Event } from '@/interfaces/event';
import defaultImage from '@/assets/default-image-for-event.svg';

defineProps<{
    selectedEvent: Event | null
}>()
</script>

<style scoped lang="css">

.EventDetailsComponent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centra verticalmente */
  padding: 2em;
  height: 100vh; /* Ocupa toda la altura de la pantalla */
}

.back-button {
  align-self: flex-start;
  margin-bottom: 1em;
  background-color: var(--accent-one);
  color: var(--third-color);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

.back-button:hover {
  background-color: var(--accent-two);
}

.event-details-container {
  display: flex;
  align-items: flex-start;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
  padding: 1.5em;
  gap: 1.5em;
  max-width: 900px;
  width: 100%;
}

.event-image-large {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.event-info {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.event-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--first-color);
}

.event-description {
  font-size: 1.25rem;
  color: var(--first-color);
}

.event-location {
  font-size: 1.25rem;
  font-style: italic;
  color: gray;
}

.event-date {
  font-size: 1.25rem;
  color: gray;
}

.event-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent-one);
}

.no-event-message {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  height: 250px; /* Altura similar a la imagen */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
}

</style>