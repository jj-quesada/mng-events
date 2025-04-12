<template>
    <main class="hubContainer">
      <HubComponent :events="eventStore.events" />
    </main>
  </template>

<script setup lang="ts">
import HubComponent from "@/components/HubComponent.vue";
import { useEventStore } from "@/stores/events";
import { onMounted } from "vue";

const eventStore = useEventStore();

onMounted(async () => {
  await eventStore.fetchEvents();
  console.log("Eventos en container:", eventStore.events);
});
</script>


<style lang="css" scoped>

    .hubContainer {
        display: flex;
        width: 100%;
    }

</style>