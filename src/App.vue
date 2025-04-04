<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/hub">Hub</router-link>
  </nav> -->
  <main class="main">
    <Sidebar v-if="showSidebar" @goToEventCreation="goToEventCreation" msg="Mi nombre"></Sidebar>
    <router-view class="main-content" :class="{ 'main-content-without-sidebar': !showSidebar }" />
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
.main {
  display: grid;
  grid-template-columns: 15em 1fr;
  
}

.main-content {
  grid-column: 2;
}

.main-content-without-sidebar {
  grid-column-start: 1;
  grid-column-end: 3;
}

</style>
