<template>
  <div>
      <div class="card-deck">
    <div class="card" style="width: 18rem">
      <img v-bind:src="imgHistoria" class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ tituloHistoria }}</h5>
        <hr /> 
        <p class="card-text">{{ bodyHistoria }}</p>
        <a href="#" class="btn btn-danger btn-block mt-auto">{{
          botonHistoria
        }}</a>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img v-bind:src="imgMovies" class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ tituloMovies }}</h5>
        <hr />
        <p class="card-text">{{ bodyMovies }}</p>
        <a href="#" class="btn btn-danger btn-block mt-auto">{{
          botonMovies
        }}</a>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img v-bind:src="imgCorreo" class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ tituloCorreo }}</h5>
        <hr />
        <p class="card-text">{{ bodyCorreo }}</p>
        <a href="#" class="btn btn-danger btn-block mt-auto">{{
          botonCorreo
        }}</a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesCard",
  data() {
    return {
      tituloHistoria: "Historias de Terror",
      bodyHistoria:
        "Ven y navega en muchas de las historias más pertubadoras que no te dejaran dormir esta noche.",
      botonHistoria: "Ir a las historias...",
      imgHistoria: require("../assets/img/Historias spooky.png"),
      tituloMovies: "Películas",
      bodyMovies:
        "¡Tenemos más películas que mostrarte!. Consulta más películas relacionadas con el mundo terror en éste apartado.",
      botonMovies: "Ir a las películas...",
      imgMovies: require("../assets/img/spookyMovies.png"),
      tituloCorreo: "Envianos tus historias",
      bodyCorreo:
        "¿Tienes alguna historia relacionada con el terror que te gustaría compartir? Envianos tu historia y nosotros la compartimos.",
      botonCorreo: "Envianos tu historia...",
      imgCorreo: require("../assets/img/spooky email.png"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
