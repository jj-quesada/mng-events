<template>
    <main class="sidebar">
        <section class="user">
            <img class="user-icon" src="@/assets/imagen_de_perfil.png" />
            <span class="user-name">{{ msg }}</span>
        </section>
        <div class="buttons-container">
          <button class="event-button" @click="goToAnotherPage">
            <i class="mdi mdi-calendar-plus"></i>
            Crear evento
          </button>
          <button class="logout-button" @click="logout">
            <i class="mdi mdi-logout"></i>
            Logout
          </button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

    const props = defineProps<{
        msg: string
    }>()

    const emit = defineEmits(['goToEventCreation']);

    function goToAnotherPage(): void {
        emit('goToEventCreation');
    }

    function logout(): void {
        // Implement logout logic here
        console.log('Logout clicked');
        // For example, you might want to clear user data or redirect to a login page
        // window.location.href = '/login'; // Redirect to login page
        // or use Vue Router to navigate
    }

</script>
  
<style scoped lang="css">
    .sidebar {
        width: 15em;
        height: 99vh;
        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.5);
        border: 2px solid var(--third-color);
        border-radius: 12px;
        background-color: var(--second-color);
        color: var(--third-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin: 5px 0px 0px 10px;
        position: fixed

    }

    .buttons-container {
      display: flex;
      flex-direction: column; /* Alinea los botones verticalmente */
      gap: 0.5em; /* Reduce el espacio entre los botones */
      margin-bottom: 1em; /* Añade un margen inferior */
    }

    .user {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 1em;

        background-color: var(--first-color);
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.4);
        border-radius: 12px 12px 0px 0px;
    }

    .user-icon {
        width: 24px;
        border-radius: 5px;
    }

    .user-name {
        position: relative;
        top: 1px;
    }

    .event-button {
        background-color: var(--accent-one);
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);

        margin: 1em;
        margin-bottom: 1.5em;
    }

    .event-button:hover {
        background-color: var(--accent-two);
    }

    .logout-button {
      background-color: #aa5555;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
      margin: 1em;
      margin-bottom: 1.5em;
    }

    .logout-button:hover {
      background-color: #874a4a;
    }

</style>