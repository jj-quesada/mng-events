<template>
    <section class="login">
        <h1 class="login-text">Log In to MNG Events</h1>
        <v-form class="form">

            <v-banner v-if="errorMessage" class="error-banner">
                {{ errorMessage }}
            </v-banner>

            <v-text-field
                v-model="username"
                label="Username"
                class="username-field"
            ></v-text-field>

            <v-text-field
                v-model="password"
                type="password"
                label="Password"
                class="password-field"
            ></v-text-field>



            <button 
                class="submit-button" 
                type="submit" 
                @click.prevent="loginSubmitted"
            >
                Log In
            </button >
        </v-form>
    </section>
    <span class="register-text">
        Don't have an account? 
        <router-link to="/register" class="register-link">Register</router-link>
    </span>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const username  = ref<string>("");
const password  = ref<string>("");

const props = defineProps({
  errorMessage: String,
});

const emit = defineEmits(['loginSubmitted']);

function loginSubmitted(): void {
    emit('loginSubmitted', { username: username.value, password: password.value });
}
</script>

<style scoped lang="css">
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 35em;
        width: 30em;
        background-color: #f5f5f5;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .login-text {
        font-size: 1.5em;
        font-weight: 700;
        margin: 1em 0;
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .username-field, .password-field {
        width: 80%;
        margin: 1em 0;
    }

    .submit-button {
        width: 80%;
        height: 3em;
        margin: 1em 0;
        border: 1px solid #808080;
        border-radius: 5px;
        background-color: #f5f5f5;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        font-weight: 600;
    }

    .submit-button:hover {
        background-color: #918e8e;
    }

    .error-banner {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f5f5f5;
        color: red;
        font-weight: 600;
    }

    .register-text {
        margin-top: 2em;
        font-weight: 600;
    }

    .register-link {
        color: #007bff;
        text-decoration: none;
    }

</style>