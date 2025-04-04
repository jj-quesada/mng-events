<template>
  <div class="event-hub">
    <h1 class="title">Event Hub</h1>
    
    <!-- Lista de eventos -->
    <div class="title">
      <h2 class="subtitle">Upcoming Events</h2>
      <div v-if="events.length > 0">
        <router-link v-for="(event, index) in events" :key="index" to="event.image" class="event-card">
          <div class="event-info">
              <img :src="event.image" alt="Event Image" class="event-image" />
              <div>
                  <h3 class="event-title">{{ event.name }}</h3>
                  <p class="event-description">{{ event.description }}</p>
                  <p class="event-date">{{ event.date }}</p>
              </div>
          </div>
        </router-link>
      </div>
      <p v-else class="no-events">No events available.</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/logo.png';

export default {
  setup() {
    const events = ref([
      { name: 'Vue.js Conference', date: '2025-06-10', description: 'A conference for Vue.js developers.', image: logo },
      { name: 'Hackathon 2025', date: '2025-07-15', description: '24-hour coding competition.', image: logo },
      { name: 'Hackathon 2025', date: '2025-07-15', description: '24-hour coding competition.', image: logo },
      { name: 'Hackathon 2025', date: '2025-07-15', description: '24-hour coding competition.', image: logo },
      { name: 'Hackathon 2025', date: '2025-07-15', description: '24-hour coding competition.', image: logo },
      { name: 'Hackathon 2025', date: '2025-07-15', description: '24-hour coding competition.', image: logo },
      { name: 'Hackathon 2025', date: '2025-07-15', description: '24-hour coding competition.', image: logo },
    ]);

    return { events };
  }
};
</script>

<style scoped lang="css">
.event-hub {
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #2c3e50;

  margin: 5px 10px 4px 25px;
}

.title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 3px;
  color: #ffffff;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.event-card {
  display: block;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: white;
  color: #000000;
  text-decoration: none;
  transition: background-color 0.3s;
}

.event-card:hover {
  background-color: #f0f0f0;
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

.event-description {
  margin-top: 4px;
  font-size: 0.825rem;
}

.no-events {
  color: gray;
}
</style>