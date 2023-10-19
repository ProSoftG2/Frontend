<script>
export default {
  name: "recover-password-form",
  data() {
    return {
      email: '',
      password: ''
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="half left">
      <div class="img-container">
        <img src="https://i.imgur.com/VuZwPb1.jpg" alt="Imagen" />
      </div>
    </div>
    <div class="half right">
      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <!-- Formulario de recuperar contraseña exitoso -->
        <div>
          <h1 class="text-2xl font-bold mb-4">Recovery Password Successful!</h1>
          <p class="text-sm mb-6">An email was sent to the email provided to recover the password.</p>
          <router-link aria-label="go to login" class="link" v-on:click="visible = false"  to="/login">
            <pv-button label="Go back" icon="pi pi-user" class="w-full"></pv-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.half {
  flex: 1;
}

.left {
  background-color: #f0f0f0; /* Añade un color de fondo opcional para la mitad izquierda */
}

.right {
  background-color: #fff; /* Añade un color de fondo opcional para la mitad derecha */
  display: flex;
  justify-content: center; /* Centra horizontalmente el contenido */
  align-items: center; /* Centra verticalmente el contenido */
}

.img-container {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>