<template>
    <main class="main-view">
        <SidebarComponent @goToEventCreation="goToAnotherPage" :msg="msg"/>
    </main>
</template>

<script setup lang="ts">
import SidebarComponent from '@/components/SidebarComponent.vue';
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref } from 'vue';



const authStore = useAuthStore();
// Definimos la variable msg para almacenar el username
const msg = ref('');

// Cargamos el perfil del usuario al montar el componente
onMounted(async () => {
  // Llamamos al método que devuelve el perfil del usuario
  const userProfile = await authStore.fetchCurrentUserProfile();
  
  // Verificamos si el perfil existe y extraemos el campo 'username'
  if (userProfile && userProfile.username) {
    msg.value = userProfile.username;  // Asignamos el username a la variable msg
  }
});




const emit = defineEmits(['goToEventCreation']);

function goToAnotherPage(): void {
    emit('goToEventCreation');
}
</script>

<style scoped lang="css">
</style>