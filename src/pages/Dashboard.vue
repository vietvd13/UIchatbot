<template>
  <h1>Dashboard</h1>
</template>

<script>
export default {
    name: 'Dashboard',
    beforeCreate: function() {
      document.body.className = 'dashboard';
    }
}
</script>

<style>
  body.dashboard {
    background-color: white;
  }
</style>

<style scoped>

</style>