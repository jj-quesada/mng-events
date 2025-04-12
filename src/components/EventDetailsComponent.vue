<template>
    <main class="EventDetailsComponent">
        <button class='back-button' onclick="history.back()"> Volver </button>
        <p class="event-details">{{ "Esto es el evento con id: " + id }}</p>
    </main>
</template>

<script setup lang="ts">

    defineProps<{
        id: number
    }>()
    
</script>

<style scoped lang="css">

.EventDetailsComponent {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.event-details {
    font-size: 2rem;
    font-weight: bold;
    color: var(--third-color);
    background-color: #2c3e50;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
}

</style>