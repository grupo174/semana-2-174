<template>
  <div>
    <div  id="movies" class="row row-cols-1 row-cols-md-2">
      <div v-for="movie in info" class="col mb-4" :key="movie">
        <div class="card h-100">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="movie.Poster" class="card-img" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ movie.Title }}</h5>
                <p class="card-text">
                  {{ movie.Plot }}
                </p> 
                <div class="card-footer">
                  <a
                    :href="'https://www.imdb.com/title/' + movie.imdbID + '/'"
                    target="_blank"
                    class="btn btn-danger mt-auto w-50"
                  >
                    Ir a link en imbd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MoviesCard",
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    let movies = ["Friday the 13th", "child's play", "scream", "dark tower"];
    for (let movie in movies) {
      axios
        .get(
          "http://www.omdbapi.com/?t=" +
            movies[movie] +
            "&type=movie&apikey=dbbd2c6f"
        )
        .then((response) => this.info.push(response.data))
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div[class="row row-cols-1 row-cols-md-2"] {
  margin-top: 2%;
  padding-left: 1%;
  padding-right: 1%;
}
h5{
    text-align: center;
    color: red;
}
p{
    color: white;
}
.btn-danger{
    background-color: darkred;
}
.btn-danger:hover{
    background-color: tomato;
}
a{
    bottom: 10px;
    right: 20px;
    position: absolute;
}
img[class="card-img"]{
    height: 300px;
};
div[class="card-title"]{
    border-bottom-width: 1px solid white;
};
</style>
