<template>
    <main class="main-view">
        <SidebarComponent @goToEventCreation="goToAnotherPage" :msg="msg"/>
    </main>
</template>

<script setup lang="ts">
import SidebarComponent from '@/components/SidebarComponent.vue';
import { useAuthStore } from "@/stores/auth";
import { computed } from 'vue';



const authStore = useAuthStore();

const msg = computed(() => {
    return authStore.userProfile?.username  || '';
});

const emit = defineEmits(['goToEventCreation']);

function goToAnotherPage(): void {
    emit('goToEventCreation');
}
</script>

<style scoped lang="css">
</style>