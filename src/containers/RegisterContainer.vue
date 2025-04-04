<template>
  <main class="register-container">
    <div class="form-container">
      <span class="title">Registration</span>
      <div class="line">
        <span class="text">Create your MNG Events account to access this new experience</span>
      </div>
      <RegisterFormComponent/>
      <div class="login-link-container">
            <span class="text"
            >Already a member?
              <a href="#" class="text login-link">Login Now</a>
            </span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import RegisterFormComponent from "@/components/RegisterFormComponent.vue";
</script>

<style scoped lang="css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #4070f4; /* Color de fondo */
  }
  .form-container {
    /* border: 2px solid #a30000; Color del borde */
    padding: 20px; /* Relleno del contenedor */
    border-radius: 10px; /* Bordes redondeados */
    background-color: #ffffff; /* Color de fondo */
  }
  .login-link-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  span {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .register-container .form-container .title {
    position: relative;
    font-size: 27px;
    font-weight: 600;
  }
  .form-container .title::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: #4070f4;
    border-radius: 25px;
  }

  .form-container .line .text {
    margin-top: 1rem;
    margin-bottom: 1rem;
    position: relative;
    font-size: 20px;
  }

  .login-link-container .text {
    color: #333;
    font-size: 14px;
  }

  .login-link-container .text a {
    color: #4070f4;
    font-size: 14px;
    font-weight: 600;
  }
</style>