<template>
    <main class="hubView">
        <HubContainer></HubContainer>
    </main>
</template>
  
<script setup lang="ts">
import HubContainer from "@/containers/HubContainer.vue";
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

</script>

<style lang="css" scoped>

    .hubView {
        display: flex;
    }

    .text-output {
        display: flex;
        align-items: center;
        margin-left: 10em;
    }

</style>
