<template>
    <main class="main-view">
        <LoginComponent @loginSubmitted="handleLoginSubmitted" :errorMessage="errorMessage"/>
    </main>
</template>

<script setup lang="ts">
import LoginComponent from '@/components/LoginComponent.vue';
import router from '@/router';
import { useAuthStore } from "@/stores/auth";
import { ref } from 'vue';

const authStore = useAuthStore();
const errorMessage = ref<string>('');

const handleLoginSubmitted = async (credentials: { username: string, password: string }) => {
  const { username, password } = credentials;

  errorMessage.value = '';

  await authStore.signIn(username, password);

  if (authStore.error) {
    errorMessage.value = 'Invalid credentials. Please try again.';
    return;
  }

  console.log("Inicio de sesión exitoso");
  router.push('/hub');
};
</script>

<style scoped lang="css">
</style>