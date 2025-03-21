<template>
    <main class="hub">
        <Sidebar msg="Mi nombre" @eventCreated="handleEventCreated"></Sidebar>
        <p class="text-output">{{ lingangu }}</p>
    </main>
</template>
  
<script setup lang="ts">
import Sidebar from "@/components/SidebarComponent.vue";
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref } from "vue";

    var lingangu = ref<string>("");

    function handleEventCreated(): void {
        lingangu.value = "lingan guliguliguli wacha linganguuu linganguu"
    }

    onMounted(() => {
        const userStore = useAuthStore();
        userStore.signIn('jj.quesadaacosta@hotmail.com', 'jotajota')
        console.log(userStore.user)
    });

</script>

<style lang="css" scoped>

    .hub {
        display: flex;
    }

    .text-output {
        display: flex;
        align-items: center;
        margin-left: 10em;
    }

</style>
