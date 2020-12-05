<template>
  <div>
    <nav class="navbar w-100">
      <h1 class="image-text">{{ tituloNav }}</h1>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="#">{{ navItem1 }}</a>
        </li> 

        <li class="nav-item">
          <a class="nav-link" href="#services">{{ navItem2 }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#movies">{{ navItem3 }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#team">{{ navItem4 }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavCard",
  data() {
    return {
      tituloNav: "Creepy Movies",
      navItem1: "Inicio",
      navItem2: "Servicios",
      navItem3: "Películas",
      navItem4: "Equipo",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
