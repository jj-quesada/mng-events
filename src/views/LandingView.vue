<template>
  <div class="landing-container">
    <img src="@/assets/landingimage.png" alt="Background" class="landing-image" />
    <h1 class="landing-title">Welcome to MNG Events!</h1>
    <p class="landing-subtitle">Explore, create, and manage events easily</p>
    <div class="landing-buttons">
      <v-btn color="primary" class="landing-button landing-button-primary" @click="goToLogin">
        Login
      </v-btn>
      <v-btn color="secondary" class="landing-button landing-button-secondary" @click="goToRegister">
        New member? Register
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToLogin() {
  router.push('/login'); // Ruta del login
}

function goToRegister() {
  router.push('/register'); // Ruta del registro
}
</script>

<style>
.landing-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.landing-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: transparent;
  color: var(--third-color);
  z-index: 1;
}

.landing-title {
  font-family: var(--first-font),serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.landing-subtitle {
  font-family: var(--second-font),serif;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.landing-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.landing-buttons .landing-button-primary {
  background-color: var(--second-color, #007bff) !important;
  color: var(--third-color, #ffffff) !important;
}

.landing-button-primary:hover {
  background-color: #3585f3;
}

.landing-buttons .landing-button-secondary {
  background-color: var(--accent-one, #28a745) !important;
  color: var(--third-color, #ffffff) !important;
}

.landing-button-secondary:hover {
  background-color: #34604b;
}
</style>