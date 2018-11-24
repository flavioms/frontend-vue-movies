<template>
  <main>
    <div class="movie-banner">
      <img class="banner" :src="'http://image.tmdb.org/t/p/w500'+movie.backdrop_path">
    </div>
    <div class="movie-title">
      <img class="img" :src="'http://image.tmdb.org/t/p/w500'+movie.poster_path">
      <div class="info">
        <h1 class="title">{{movie.title}}</h1>

      </div>
    </div>
  </main>
  
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Movie",
  data(){
    return{
    }
  },

  mounted() {
    this.$store.dispatch('findMovie', this.$route.params.id)
  },

  computed: {
    ...mapState(["movie"])
  }
};
</script>

<style lang="scss">
.movie-banner{
  height: 30%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  >.banner{
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    object-position: 0 0; 
  }
}

.movie-title{
  display: grid;
  position: absolute;
  grid-template-columns: 96px auto;
  grid-template-rows:  .5fr 1fr;
  grid-template-areas: 
  "img ."
  "img info";
  top: 26%;
  padding-left: 16px;
  >.img{
    grid-area: img;
    width: 96px;
    height: 168px;
   box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
  }

  .info{
    grid-area: info;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    padding-left: 16px;
    color: white;
  }
}
</style>
