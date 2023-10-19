<template>
  <div class="searchParking">
    <h1>parking lots</h1>

    <!-- Campo de búsqueda -->
    <div>
      <select v-model="selectedFilter">
        <option value="name">Name</option>
        <option value="address">Address</option>
      </select>
      <input type="text" v-model="searchQuery" placeholder="Search...">
    </div>

    <!-- Lista de resultados de espacios de estacionamiento en forma de tarjetas -->
    <div class="parking-cards">
      <div v-for="space in filteredSpaces" :key="space.id" class="parking-card">
        <div class="card-content">
          <img :src="space.photo" alt="Parking Space">
          <div class="parking-details">
            <h2>{{ space.name }}</h2>
            <p>Hourly Rate: ${{ space.hourlyRate }}/hour</p>
            <p>Daily Rate: ${{ space.dailyRate }}/day</p>
            <p>Address: {{ space.address }}</p>

            <router-link :to="{ name: 'ParkingDetails', params: { id: space.id } }">
              <button class="ver-mas-button">see more </button>
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../shared/services/http-search.js";
export default {
  name: "SearchParking",
  data() {
    return {
      searchQuery: "",
      selectedFilter: "name", //  por defecto: "Nombre"
      spaces: []
    };
  },
  computed: {
    filteredSpaces() {
      // Filtrar espacios de estacionamiento según la opción seleccionada
      return this.spaces.filter((space) =>
          space[this.selectedFilter].toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  mounted() {
    // Cargar datos de espacios de estacionamiento desde la API
    http.get('/parkingSpaces')
        .then((response) => {
          this.spaces = response.data;
        })
        .catch((error) => {
          console.error('Error loading data:', error);
        });
  }
};
</script>

<style scoped>
.parking-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.parking-card {
  background-color: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.49);
  margin: 10px;
  padding: 10px;
  max-width: 300px;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.parking-details {
  margin-top: 10px;
}

.view-more-button {
  background-color: #588a6f;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 5px;
}


.ver-mas-button {
  background-color: #738d8f;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}
.parking-card img {
  max-width: 100%;
}
</style>
