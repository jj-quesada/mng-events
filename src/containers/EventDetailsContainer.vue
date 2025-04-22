<template>
    <main class="event-details-container">
        <EventDetailsComponent :selectedEvent></EventDetailsComponent>
    </main>
</template>

<script setup lang="ts">
import EventDetailsComponent from '@/components/EventDetailsComponent.vue';
import { useEventStore } from '@/stores/events';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const props = defineProps<{
    id: string
}>()

const eventStore = useEventStore();
const { selectedEvent } = storeToRefs(eventStore);

onMounted(async () => {
    await eventStore.fetchEventById(props.id);
});
</script>