<script>
export default {
  name: "password-forgot-form",
  data() {
    return {
      email: '',
      new_password: '',
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
        <div class="text-center mb-5">
          <div class="text-900 text-3xl font-medium mb-3">Recovery Password</div>
        </div>
        <!-- Formulario de Recuperar Contraseña -->
        <div>
          <label for="email1" class="block text-900 font-medium mb-2">Email</label>
          <pv-inputText id="email1" type="text" placeholder="Email address" class="w-full mb-3" />

          <label for="password1" class="block text-900 font-medium mb-2"> New Password</label>
          <pv-inputText id="password1" type="password" placeholder="Password" class="w-full mb-3" />
          <router-link aria-label="go to password recovery form" class="link" v-on:click="visible = false"  to="/recover-password">
            <pv-button label="Send" icon="pi pi-user" class="w-full"></pv-button>
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