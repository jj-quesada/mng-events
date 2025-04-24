<template>
    <main class="hubContainer">
      <HubComponent :events="eventStore.events" />
    </main>
  </template>

<script setup lang="ts">
import HubComponent from "@/components/HubComponent.vue";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import { useEventStore } from "@/stores/events";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const eventStore = useEventStore();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore)

onMounted(async () => {
  await eventStore.fetchEvents();
  console.log("Eventos en container:", eventStore.events);

  if (!user.value){
    router.push('/');
  }
});
</script>


<style lang="css" scoped>

    .hubContainer {
        display: flex;
        width: 100%;
    }

</style>