<template>
    <main class="EventCreationContainer">
        <EventCreation :userId="user.id" @event-created="handleEventCreation"></EventCreation>
    </main>
</template>
  
<script setup lang="ts">
import EventCreation from '@/components/EventCreationComponent.vue';
import router from '@/router';
import { Event } from '@/interfaces/event';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { useEventStore } from '@/stores/events';

const auth = useAuthStore();
const { user } = storeToRefs(auth);

const eventStore = useEventStore();

async function handleEventCreation(event: Event, image: File | undefined) {

    await eventStore.createEvent(event, image)
        .then(() => {
            console.log("Event created successfully!");
            router.push("/hub");
        })
        .catch((error) => {
            console.error("Error creating event:", error);
        });
}

</script>