<script>
import {AuthApiService} from "../services/authApiService.js";
import {useUserStore} from "../store/user-store.store.js";
export default {
  name: "login-form",
  data() {
    return {
      email: '',
      password: '',
      authApi: new AuthApiService()
    }
  },
  setup() {
    const userStore = useUserStore();

    const setUser = (user) => {
      userStore.setUser(user);
    };

    return { setUser };
  },
  methods: {
    login(event) {
      event.preventDefault();
      this.authApi.signIn(this.email, this.password)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('user', JSON.stringify(res.data));
            }
            this.setUser(res.data);
            this.$router.push("/home")
          })
          .catch(err => this.$toast.add({
            severity: "warn",
            detail: "Invalid email or password",
            summary: "Please double-check your login credentials and try again."
          }));
    }
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
          <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span class="text-600 font-medium line-height-3">Don't have an account?</span>
          <router-link aria-label="go to register form" class="link" v-on:click="visible = false"  to="/register">
            <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
          </router-link>
        </div>
        <!-- Formulario de login -->
        <div>
          <label for="email1" class="block text-900 font-medium mb-2">Email</label>
          <pv-inputText v-model="email" id="email1" type="text" placeholder="Email address" class="w-full mb-3" />

          <label for="password" class="block text-900 font-medium mb-2">Password</label>
          <pv-inputText v-model="password" id="password1" type="password" placeholder="Password" class="w-full mb-3" />

          <div class="flex align-items-center justify-content-between mb-6">
            <router-link aria-label="go to recovery-password" class="link" v-on:click="visible = false"  to="/forgot-password">
              <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
            </router-link>
          </div>
            <router-link aria-label="go to home" class="link" v-on:click="visible = false"  to="/login">
              <div>
                <pv-button label="Sign In" icon="pi pi-user" class="w-full"></pv-button>
              </div>
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
