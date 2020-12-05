<template>
  <div>
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            v-bind:src="imgSlide1"
            alt="First slide"
            width="1140px"
            height="300px"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ titleSlide1 }}</h5>
            <p>{{ bodySlide1 }}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            v-bind:src="imgSlide2"
            alt="Second slide"
            width="1140px"
            height="300px"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ titleSlide2 }}</h5>
            <p>{{ bodySlide2 }}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            v-bind:src="imgSlide3"
            alt="Third slide"
            width="1140px"
            height="300px"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ titleSlide3 }}</h5>
            <p>{{ bodySlide3 }}</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Siguiente</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBanner",
  data () {
      return{
            titleSlide1: 'Bienvenido a tus pesadillas',
            bodySlide1: 'Prometieron que los sueños pueden hacerse realidad, pero olvidaron mencionar que las pesadillas también son sueños',
            imgSlide1: require('../assets/img/misterio.jpg'),
            titleSlide2: 'Cosas extrañas',
            bodySlide2: 'En mi móvil hay una foto mía durmiendo en mi cama. Vivo solo.',
            imgSlide2: require('..//assets/img/tunel.jpg'),
            titleSlide3: 'Cierra la puerta',
            bodySlide3: 'Sé que de noche cierras las ventanas y la puerta con llave para que nadie entre a tu casa. Pues bien, qué tal si te digo que ya estoy adentro?',
            imgSlide3: require('../assets/img/pesadillas.jpg')
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
