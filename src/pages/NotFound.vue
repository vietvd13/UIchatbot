<template>
  <center>
    <div class="card">
      <div class="img404">
        <img src="../assets/404.jpg" alt="">
      </div>
      <div class="title">
        <h3>PAGE NOT FOUND</h3>
      </div>
      <div class="btn">
        <router-link to="/"><button>Go to Home <i class="icofont-arrow-right"></i></button></router-link>
      </div>
    </div>
  </center>
</template>

<script>
export default {
    name: 'NotFound',
    beforeCreate: function() {
      document.body.className = 'notfound'
    }
}
</script>

<style>
  body.notfound {
        background-color: #f5f5fc;
        background-image: url(../assets/login-bg.jpg); 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
  }
</style>

<style scoped src="../assets/css/NotFound.css"></style>