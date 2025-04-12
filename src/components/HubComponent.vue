<template>
  <div class="event-hub">
    <div class="title-container">
      <h1 class="title">Event Hub</h1>
      <h2 class="subtitle">Upcoming Events</h2>
    </div>
    
    <div class="all-events">
      <div class="events" v-if="events.length > 0">
        <router-link v-for="(event, index) in events" :key="index" :to="{ name: 'event-details', params: { id: event.id },  }" class="event-card">
          <div class="event-info">
              <img :src="event.imageFile" alt="Event Image" class="event-image" />
              <div>
                <h3 class="event-title">{{ event.name }}</h3>
                <p class="event-description">{{ event.description }}</p>
                <p class="event-location">{{ event.location }}</p> 
                <p class="event-date">{{ event.dateTime }}</p>
                <p v-if="event.price > 0" class="event-price">{{ event.price }} €</p>
                <p v-else class="event-price">FREE</p>
              </div>
          </div>
        </router-link>
      </div>
      <p v-else class="no-events">No events available.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Event } from '@/interfaces/event'

defineProps<{
  events: Event[]
}>()

</script>

<style scoped lang="css">
.event-hub {
  width: 100%;
  border: 2px solid var(--third-color);
  border-radius: 8px;
  background-color: #2c3e50;

  margin: 1em 5em 1em 5em;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--first-color);
  border-radius: 8px 8px 0 0;

  padding-left: 20px;

  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5);
}

.all-events, .title {
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--third-color);
}

.subtitle {
  color: var(--third-color);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1em;
}

.events {
  display: grid;
  grid-template-columns: 49% 49%;
  padding: .5em;
  gap: 16px;

}

.event-card {
  display: block;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  color: var(--first-color);
  text-decoration: none;
  transition: background-color 0.3s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);

}

.event-card:hover {
  background-color: #e2e1e1;
}

.event-info {
  display: flex;
  align-items: center;
}

.event-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
}

.event-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 7px;
}

.event-date {
  font-size: 1.125rem;
  color: gray;
}

.event-description, .event-location, .event-price, .event-private {
  margin-top: 4px;
  font-size: 0.825rem;
}

.no-events {
  color: gray;
}
</style>