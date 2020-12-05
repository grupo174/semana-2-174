<template>
  <div id="app">
    <div class="container">
      <header id="navegador">
        <NavCard></NavCard>
        <TopBanner></TopBanner>
      </header>
      <div id="services" class="container rounded d-block mt-3">
        <ServicesCard></ServicesCard>
      </div>
       <MoviesCard></MoviesCard>
      <div id="team" class="container rounded d-block mt-3">
        <TeamCard v-bind:member="member"></TeamCard>
      </div>
    </div>
    <footer class="container mt-3" id="piePagina">
      <FooterCard></FooterCard>
    </footer>
  </div>
</template>

<script>
import NavCard from "./components/NavCard.vue";
import TopBanner from "./components/TopBanner.vue";
import ServicesCard from "./components/ServicesCard.vue";
import MoviesCard from "./components/MoviesCard.vue";
import TeamCard from "./components/TeamCard.vue";
import FooterCard from "./components/FooterCard.vue";

export default {
  name: "App",
  components: {
    NavCard,
    TopBanner,
    TeamCard,
    ServicesCard,
    MoviesCard,
    FooterCard
  },
  data() {
    return {
      member: [
        //Información de luis cobo en la sección team
        {
          codigo: 1,
          nombre: "Luis Cobo",
          descripcion:
            "Edad: 37. Profesión: Profesor de Informática Hobbies: Videojuegos (Valorant, Age of Empires, World of Warcraft), cocinar, lecturas, mangas y animés, películas.",
          rol: "Desarrollador backend",
          image: require("@/assets/img/luis.jpg"),
        },
        // Información de Orlando Palacios en la sección team
        {
          codigo: 2,
          nombre: "Orlando Palacios",
          descripcion:
            "Edad: 29. Profesión: Ingeniero de Petroleos. Hobbies: Tecnología, lectura y temas paranormales.",
          rol: "Analista de Software",
          image: require("@/assets/img/Orlando.jpg"),
        },
        // Información de Juan esteban quintero en la sección team
        {
          codigo: 3,
          nombre: "Juan Esteban Quintero",
          descripcion:
            "Edad: 26. Profesión: Ingeniero de Sistemas y Computación. Hobbies: Ciclismo, Videojuegos Lectura (manga, novelas y comics).",
          rol: "Desarrollador frontend",
          image: require("@/assets/img/esteban.jpg"),
        },
        // Información de Nallive Trujillo en la sección team
        {
          codigo: 4,
          nombre: "Nallive Trujillo",
          descripcion:
            "Edad: 30. Profesión: Actualmente estudia un curso de programacion por el convenio Mision TIC-UTP 2022. Hobbies: Leer libros, blogs, revistas, etc.",
          rol: "Arquitecto de software",
          image: require("@/assets/img/nallive.jpg"),
        },
        // Información de yaned snachez en la sección team
        {
          codigo: 5,
          nombre: "Yaned Sánchez",
          descripcion:
            "Edad: 27. Profesión: Licenciada en comunicación e informática educativa. Hobbies: Escuchar música, ver películas y series, dibujar.",
          rol: "Tester",
          image: require("@/assets/img/yaned.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
</style>
