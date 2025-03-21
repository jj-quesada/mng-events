<template>
    <main class="sidebar">
        <section class="user">
            <img class="user-icon" src="@/assets/imagen_de_perfil.png" />
            <span class="user-name">{{ msg }}</span>
        </section>
        <button class="event-button" @click="eventCreated">Crear evento</button>
    </main>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

    const emit = defineEmits(['eventCreated']);

    const props = defineProps<{
        msg: string
    }>()

    function eventCreated(): void {
        emit('eventCreated');
    }

</script>
  
<style scoped lang="css">
    .sidebar {
        width: 15em;
        height: 100vh;
        background-color: #2c3e50;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.5);
    }

    .user {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 1em;

        background-color: #212e41;
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
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);

        margin: 1em;
    }

    .event-button:hover {
        background-color: #2980b9;
        box-shadow: none;
    }

</style>