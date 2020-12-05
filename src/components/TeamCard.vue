<template>
  <div>
    <div class="row row-cols-1 row-cols-md-5">
      <div v-for="myteam in member" class="col mb-4" :key="myteam">
        <div class="card h-100">
          <img :src="myteam.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title text-center">
              {{ myteam.nombre }}
            </h5>
            <h6 class="card-title text-center">{{ myteam.rol }}</h6>
            <p class="card-text text-center">{{ myteam.descripcion }}</p>
          </div> 
          <div class="card-footer">
            <small class="text-muted"
              ><span>Código : </span>{{ myteam.codigo }}</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img[class="card-img-top"] {
  background-color: black;
  padding-top: 3%;
  padding-left: 5%;
  padding-right: 5%;
}
</style>
