<template>
    <main class="hubContainer">
        <HubComponent :events></HubComponent>
    </main>
</template>
  
<script setup lang="ts">
import HubComponent from "@/components/HubComponent.vue";
import { events } from "@/assets/eventsMocks";

</script>

<style lang="css" scoped>

    .hubContainer {
        display: flex;
        width: 100%;
    }

</style>