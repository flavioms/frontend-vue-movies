<template>
  <div>
    <Header class="header" title="MovieApp" v-on:pesquisar="pesquisar"></Header>

    <main class="main">
      <div class="empty-error" v-if="moviesList.length == 0">
        <i class="material-icons icon">error_outline</i>
        <h1 class="text">Selecione uma categoria!</h1>
      </div>
    
      <ul class="list-card">
        <li v-for="movie in moviesList" :key="movie.id" v-if="movie.poster_path != null" :to="/movie/+movie.id">
          <Card :movie='movie'/>
        </li>
      </ul>
    </main>

  </div>
</template>


<script>
import { mapState } from "vuex";

import { mapGetters } from "vuex";

import Card from './Card';

import Header from './Header';

export default {
  name: "Movies",

  components: {
    Card, Header
  },

  data() {
    return {
      teste: "testes esdfksmfksmkf"
    }
  },

  mounted() {
    this.$store.dispatch("allMovies");
    this.$store.dispatch("allCategory");
  },

  computed: {
    pesquisar() {
      if(this.teste){
        console.log(this.teste);
      }
    },
    moviesList() {
      return this.moviesByCategory(this.$route.params.category);
    },
    ...mapState(["movies", "categorys"]),
    ...mapGetters(["moviesByCategory", "findMovieByTitle"])
  }
};
</script>

<style lang="scss">
@import '../assets/css/Settings/colors.scss';

.main{
  padding-top: 160px;
}
.empty-error {
  color: $color-light-secundary;
  font-size: 1.5em;
  text-align: center;
  top: 2em;
}

.empty-error .icon {
  font-size: 2em;
}

.list-card {
  padding: 0 16px;
}

</style>
