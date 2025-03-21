<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/hub">Hub</router-link>
  </nav> -->
  <main class="main">
    <Sidebar v-if="showSidebar" @goToEventCreation="goToEventCreation" msg="Mi nombre"></Sidebar>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import Sidebar from './components/SidebarComponent.vue';
import { computed } from 'vue';

  const route = useRoute();
  const showSidebar = computed(() => route.meta.hasSidebar !== false);

  const router = useRouter();
  function goToEventCreation(): void {
    router.push('/eventCreation');
  }

</script>

<style>

html {
  background-image: url('@/assets/birds.jpg');
  background-repeat: repeat;
  background-size: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  display: flex;

}

</style>
