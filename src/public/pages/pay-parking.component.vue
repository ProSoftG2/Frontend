<template>
  <div class="pay-parking">
    <div class="centered-card">
    <div class="card">
      <div class="left-section">
        <h2>Elegir tipo de tarifa</h2>
        <div class="rate-buttons">
          <button class="rate-button" :class="{ selected: hourlyRateSelected }" @click="selectHourlyRate">Por hora</button>
          <button class="rate-button" :class="{ selected: dailyRateSelected }" @click="selectDailyRate">Por día</button>
        </div>
        <div class="quantity">
          <span>Cantidad: </span>
          <button @click="decrementQuantity">-</button>
          <span>{{ quantity }}</span>
          <button @click="incrementQuantity">+</button>
        </div>
        <div class="date-picker">
          <h2>Elegir fecha</h2>
          <input type="date" v-model="selectedDate" />
        </div>
      </div>

      <div class="right-section">
        <h2>Resumen</h2>
        <p>Tipo de tarifa: {{ hourlyRateSelected ? 'Por hora' : 'Por día' }}</p>
        <p>Cantidad: {{ quantity }}</p>
        <p>Fecha: {{ selectedDate }}</p>
        <p>Precio del estacionamiento: ${{ totalPrice }}</p> <!-- Muestra el precio aquí -->
        <h2>Método de pago</h2>
        <select v-model="selectedPaymentMethod">
          <option value="credit">Tarjeta de crédito</option>
          <option value="paypal">PayPal</option>
           <!-- Agrega más opciones de método de pago  -->

        </select>

        <!-- Agrega aquí el botón para realizar el pago. -->
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayParking",
  data() {
    return {
      hourlyRateSelected: true,
      dailyRateSelected: false,
      quantity: 1,
      selectedDate: new Date().toISOString().substr(0, 10),
      selectedPaymentMethod: "credit", // Método de pago predeterminado
    };
  },
  computed: {
    totalPrice() {
      // Lógica para calcular el precio del estacionamiento

      //return this.hourlyRateSelected ? 10 * this.quantity : 50 * this.quantity;
    },
  },
  methods: {
    selectHourlyRate() {
      this.hourlyRateSelected = true;
      this.dailyRateSelected = false;
    },
    selectDailyRate() {
      this.hourlyRateSelected = false;
      this.dailyRateSelected = true;
    },
    incrementQuantity() {
      this.quantity += 1;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    // Agrega aquí métodos o lógica para realizar el pago.
  },
};
</script>

<style scoped>
.card {
  display: flex;
  background-color: #7578cc; /* Fondo amarillo */
}
.left-section {
  flex: 1;
}

.rate-buttons {
  display: flex;
}

.rate-button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.selected {
  background-color: #65b4bb;
  color: white;
}

.quantity {
  display: flex;
  align-items: center;
}

.quantity button {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

.date-picker {
  margin-top: 20px;
}

.right-section {
  flex: 1;
  border-left: 1px solid #ffffff;
  padding: 40px;
}


.pay-parking {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.centered-card {

}

.card {
  /* Estilos del card */
  width: 800px; /* Ajusta el ancho según tus necesidades */

}
</style>
