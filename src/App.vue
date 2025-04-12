<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/hub">Hub</router-link>
  </nav> -->
  <main class="main">
    <SidebarContainer v-if="showSidebar" @goToEventCreation="goToEventCreation"></SidebarContainer>
    <router-view class="main-content" :class="{ 'main-content-without-sidebar': !showSidebar }" />
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import SidebarContainer from './containers/SidebarContainer.vue';
import { useAuthStore } from './stores/auth';


  const route = useRoute();
  const showSidebar = computed(() => route.meta.hasSidebar !== false);

  const router = useRouter();
  function goToEventCreation(): void {
    router.push('/eventCreation');
  }

  const authStore = useAuthStore();

  onMounted(async () => {
    await authStore.init();
  });

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
