<template>
  <div class="start">
    <h1>This is the Start Page </h1>
  </div>
</template>

<script>
export default {
  name: "start",
  title: "Start"
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .start {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.start {
  background-color: #2bdbea;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.start h1 {
  color: red;
}

</style>
