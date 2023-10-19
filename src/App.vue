<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="custom-toolbar bg-plomo" fixed>
      <template #start>
        <div class="flex">
          <h3 class="park-easy-title">ParkEasy</h3>
        </div>
      </template>
      <template #end>
        <div class="flex">
          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href }" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white plomo-button" @click="navigate">
              <!-- Agrega la clase "text-custom" para el color del texto -->
              <span class="text-custom">{{ item.label }}</span>
            </pv-button>
          </router-link>
          <pv-split-button label="Save" icon="pi pi-plus" :model="items1" />
        </div>
      </template>
    </pv-toolbar>
  </header>
  <div class="content">
    <pv-sidebar v-model:visible="drawer" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  title: 'ParkEasy',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Inicio', to: '/start' },
        { label: 'Buscar un estacionamiento', to: '/searchParking' },
        { label: 'Preguntas frecuentes', to: '/frequentQuestions' }
      ],
      items1: [
        {label: 'Editar Perfil',icon: 'pi pi-user', to: '/profile'},
        {label: 'Mis Favoritos',icon: 'pi pi-heart-fill', to: '/favourites'},
        {label: 'Historial de pagos',icon: 'pi pi-history', to: '/payments_history'},
        {label: 'Crear Espacio',icon: 'pi pi-pencil', to: '/new_space'},
        {label: 'Ver mis espacios',icon: 'pi pi-eye', to: '/my_spaces'},
        {label: 'Mi Suscripcion',icon: 'pi pi-bookmark-fill', to: '/subscription'},
        {label: 'Salir',icon: 'pi pi-sign-out', to: '/login'}
      ]
    };
  },
  methods: {},
};
</script>

<style>
.custom-toolbar {
  background-color: rgb(189, 136, 210); /* Color plomo */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
}

.park-easy-title {
  color: #090101;
  font-size: 20px;
}

.content {
  margin-top: 64px;
  padding: 16px;
}

/* Estilo para los botones en color plomo */
.plomo-button {
  background-color: #1ea4a8; /* Color plomo */
  color: #cb3c3c;
}

/* Estilo para los botones cuando se les hace hover (cambio de color) */
.plomo-button:hover {
  background-color: #cdf1eb; /* Cambia este color al que desees al hacer hover */
}

/* Estilo para el color del texto personalizado */
.text-custom {
  color: #090101; /* Cambia este color al que desees para el texto personalizado */
}
</style>



