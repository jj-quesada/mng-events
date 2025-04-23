<template>
  <main class="register-container">
    <div class="form-container">
      <div class="registration-upper">
        <span class="title">Registration</span>
        <div class="line">
          <span class="text">Create your MNG Events account to access this new experience</span>
        </div>
      </div>
      <RegisterFormComponent @signUpSubmitted="handleSignUp"/>
      <span class="login-text">
                    Already a member?
                    <router-link to="/login" class="login-link">Login Now</router-link>
      </span>
    </div>
  </main>
</template>

<script setup lang="ts">
import RegisterFormComponent from "@/components/RegisterFormComponent.vue";
import { AuthUser, UserProfile } from "@/interfaces/UserInterfaces";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const handleSignUp = async (data: { authUser: AuthUser, password: string, userProfile: UserProfile }) => {
  const { authUser, password, userProfile } = data;
  try {
    await authStore.signUp(authUser, password, userProfile)
    console.log("Registro exitoso");
    router.push('/hub');
  } catch (error) {
    // Handle error
    console.log("Error during sign up:", error);
  }
}
</script>

<style scoped lang="css">
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70em;
  }
  .form-container {
    /* border: 2px solid #a30000; Color del borde */
    padding: 20px; /* Relleno del contenedor */
    border-radius: 10px; /* Bordes redondeados */
    background-color: #f4edea; /* Color de fondo */

  }
  span {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .register-container .form-container .title {
    position: relative;
    font-size: 27px;
    font-weight: 600;
    margin: 0.5em 0 1em 0;
  }
  .form-container .title::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: var(--accent-one);
    border-radius: 25px;
  }

  .form-container .line .text {
    margin-top: 1rem;
    margin-bottom: 1rem;
    position: relative;
    font-size: 20px;
  }

  .registration-upper {
     margin: 0.5em 0 1em 0;
   }

  .login-text {
    color: var(--first-color);
    margin-top: 2em;
    font-weight: 600;
    text-align: center; /* Centra el texto horizontalmente */
    font-size: 1rem;
    display: block; /* Asegura que el elemento ocupe todo el ancho disponible */
  }

  .login-link {
    color: var(--accent-one);
    text-decoration: none;
    font-weight: 600;
    display: inline-block; /* Permite que el enlace se comporte como un bloque en línea */
    text-align: center; /* Centra el texto dentro del enlace */
  }
</style>