<template>
  <header class="header-movie">  
    <h1 class="title">{{title}}</h1>
    <div class="search">
      <input v-if="searchView" v-on:keyup.stop="chamarPesquisa" v-model="movieTitle" class="input" type="text">
      <i class="material-icons" @click="searchView = !searchView">search</i>
    </div>
    <ul class="navbar-movie">
      <router-link :to="/movies/+categoria.id" class="item" v-for="categoria in categorys" :key="categoria.id">{{categoria.name}}</router-link>
    </ul>
  </header>
</template>

<script>
import { mapState } from "vuex";

import { mapGetters } from "vuex";

export default {
  name: "Header",

  data() {
    return {
      searchView: false,

      movieTitle: ""
    };
  },

  methods: {
    chamarPesquisa() {
      this.$emit("pesquisar", {
        movieTitle: this.movieTitle
      });
    }
  },

  mounted() {
    this.$store.dispatch("allCategory");
  },

  props: ["title"],

  computed: {
    ...mapState(["categorys"]),

    ...mapGetters(["findMovieByTitle"])
  }
};
</script>

<style lang="scss">
.header-movie {
  display: grid;
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 2;
  grid-template-columns: 1fr auto;
  grid-template-areas: "title search" "navbar navbar";
  height: 160px;
  width: 100vw;
  padding: 16px;
  background-color: #010e17;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  > .title {
    grid-area: title;
    justify-self: center;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 26px;
    color: rgba(255, 255, 255, 0.9);
  }
}

@media screen and (min-width: 600px) {
  .navbar-movie {
    grid-area: navbar;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 16px 0;
    > .item {
      text-decoration: none;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      padding: 16px;
    }

    > .item.active {
      color: white;
      font-size: 20px;
    }
  }

  .search {
    grid-area: search;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-right: 20px;
    color: rgba(255, 255, 255, 0.5);

    .input {
      background: none;
      border: none;
      border-bottom: rgba($color: #fff, $alpha: 0.7) solid 1px;
      width: 300px;
      color: white;
      padding: 0 8px;
    }

    .input:hover {
      outline: none;
    }

    .material-icons {
      font-size: 26px;
    }
  }

}

@media screen and (max-width: 600px) {
  .navbar-movie {
    grid-area: navbar;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin: 16px 0;
    overflow: scroll;
    > .item {
      text-decoration: none;
      font-size: 20px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      padding: 16px;
    }

    > .item.active {
      color: white;
      font-size: 24px;
    }
  }

  .navbar-movie::-webkit-scrollbar {
    display: none;
  }

  .search {
    grid-area: search;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    color: rgba(255, 255, 255, 0.5);

    .input {
      background: none;
      border: none;
      border-bottom: rgba($color: #fff, $alpha: 0.7) solid 1px;
      width: 70%;
      color: white;
      padding: 0 8px;
    }

    .input:hover {
      outline: none;
    }

    .material-icons {
      font-size: 26px;
    }
  }
}
</style>