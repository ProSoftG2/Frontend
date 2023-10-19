<template>
  <div>
    <h1 class="profile-title">Perfil de Usuario</h1>
    <div class="profile-dropdown">
      <button @click="toggleDropdown" class="profile-dropdown-toggle">{{ username }}</button>
      <div v-if="isDropdownOpen" class="profile-dropdown-options">
        <router-link :to="{ name: 'profile' }">Perfil</router-link>
        <router-link :to="{ name: 'profile-edit' }">Editar Perfil</router-link>
        <router-link :to="{ name: 'profile-favorites' }">Mis Favoritos</router-link>
        <router-link :to="{ name: 'profile-history' }">Historial de Pagos</router-link>
        <router-link :to="{ name: 'profile-create-space' }">Crear Espacio</router-link>
        <router-link :to="{ name: 'profile-my-spaces' }">Mis Espacios</router-link>
        <router-link :to="{ name: 'profile-subscription' }">Mi Suscripción</router-link>
        <router-link to="/start" @click="logout">Salir</router-link>
      </div>
    </div>
    <!-- Resto del contenido del perfil -->
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
  data() {
    return {
      isDropdownOpen: false,
      username: 'Nombre de Usuario', // Aquí debes cargar el nombre de usuario cuando el usuario inicia sesión
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      // Implementa la lógica de cierre de sesión aquí
    },
  },
};
</script>

<style scoped>
/* Estilos para la lista desplegable */
.profile-dropdown {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

.profile-dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
}

.profile-dropdown-options {
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: none;
}

.profile-dropdown-options a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
}

.profile-dropdown-options a:hover {
  background-color: #f0f0f0;
}

.profile-dropdown.open .profile-dropdown-options {
  display: block;
}
</style>
