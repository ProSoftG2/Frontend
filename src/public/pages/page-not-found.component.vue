
<template>
  <div class="page-not-found">
    <h1>Error 404 - Página no encontrada</h1>
    <p>La ruta '{{ $route.fullPath }}' no se encontró.</p>
    <router-link to="/start">
      <button class="p-button p-button-primary">Volver a start</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>

<style scoped>
.page-not-found {
  text-align: center;
  margin-top: 50px;
}

.p-button-primary {
  background-color: #2bdbea;
  color: #ffffff;
}
</style>
