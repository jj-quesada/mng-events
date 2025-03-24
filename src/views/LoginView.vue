<template>
    <main class="main-view">
        <LoginContainer />
    </main>
</template>

<script setup lang="ts">
import LoginContainer from '@/containers/LoginContainer.vue';

</script>

<style scoped lang="css">
.main-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
}
</style>