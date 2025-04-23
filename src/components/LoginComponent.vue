<template>
    <main class="login-container">
        <article class="background">
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

                <span class="register-text">
                    Don't have an account? 
                    <router-link to="/register" class="register-link">Register</router-link>
                </span>

            </section>
        </article>
        
    </main>
    
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
    .login-container {
        width: 100vw;
    }

    .background {
        padding-top: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 35em;
        width: 30em;
        background-color: var(--third-color);
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .login-text {
      position: relative;
      font-size: 27px;
      font-weight: 600;
      margin: 0.5em 0 1em 0;
    }
    .login-text::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 30px;
      background-color: var(--accent-one);
      border-radius: 25px;
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
        margin: 0.5em 0;
    }

    .submit-button {
        width: 80%;
        height: 3em;
        margin: 1em 0;
        border-radius: 5px;
        background-color: var(--accent-one);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: var(--first-color);
        font-weight: 600;
    }

    .submit-button:hover {
        background-color: #18c16e;
    }

    .error-banner {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: var(--third-color);
        color: red;
        font-weight: 600;
    }

    .register-text {
      color: var(--first-color);
      margin-top: 2em;
      font-weight: 600;
    }

    .register-link {
      color: var(--accent-one);
      text-decoration: none;
    }

</style>