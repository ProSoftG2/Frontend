<template>
  <div class="parking-details">
    <div class="parking-card">
      <div class="left-panel">
        <h1>{{ space.name }}</h1>
        <img :src="space.photo" alt="Parking Space">
        <p>Hourly Rate: ${{ space.hourlyRate }}/hour</p>
        <p>Daily Rate: ${{ space.dailyRate }}/day</p>
        <p>Address: {{ space.address }}</p>
      </div>
      <div class="right-panel">
        <h2>Details of Owner</h2>

        <!-- para la foto  -->
        <img :src="space.photo" alt="Parking Space">


        <p>Owner: {{ details.ownerName }}</p>
        <p>Contact: {{ details.ownerContact }}</p>
        <p>Cell Phone Number: {{ details.CellPhoneNumber }}</p>
        <h2>Rental Description</h2>
        <p>{{ details.rentalDescription }}</p>
        <div class="bottom-buttons">

          <pv-button class="p-button-text text-custom color-button" @click="goToSearch">
            <span class="text-white">go back</span>
          </pv-button>
          <pv-button class="p-button-text text-custom color-button" @click="continueToNextPage">
            <span class="text-white">continue</span>
          </pv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../shared/services/http-search.js";
export default {
  name: "ParkingDetails",
  data() {
    return {
      space: null,
      details: null,
    };
  },
  methods: {
    goToSearch() {
      this.$router.push("/searchParking");
    },

    continueToNextPage() {
      this.$router.push("/pay-parking");
    },
  },
  created() {
    // Obtener el ID del espacio de estacionamiento de la ruta actual
    const spaceId = this.$route.params.id;

    // Realizar solicitudes a la API para obtener los detalles del estacionamiento y del dueño
    http.get(`/parkingSpaces/${spaceId}`)
        .then((response) => {
          this.space = response.data;
        })
        .catch((error) => {
          console.error('Error loading space details:', error);
        });

    http.get(`/parkingDetails/${spaceId}`)
        .then((response) => {
          this.details = response.data;
        })
        .catch((error) => {
          console.error('Error loading owner details:', error);
        });
  },
};
</script>

<style scoped>

.parking-card {
  background-color: #b9b8e8;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.left-panel, .right-panel {
  flex: 1;
}

.left-panel img {
  width: 80%;
  max-width: 300px;
}

.right-panel h2 {
  margin-top: 20px;
}

.bottom-buttons {
  display: flex;
  margin-top: 1rem;
  color:darkblue;
}

.color-button {
  background-color: #d972a0;
  color: #fff;
  font-size: 14px;
  padding: 10px 30px;
  border: black;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}

.color-button:hover{

  opacity: 0.8;
}

</style>