<template>
  <header class="header-movie">
    <a href="" class="menu"><i class="material-icons">menu</i></a>
    <h1 class="title">{{title}}</h1>
    <a href="" class="search"><i class="material-icons">search</i></a>

    <ul class="navbar-movie">
      <router-link :to="/movies/+categoria.id" class="item" v-for="categoria in categorys" :key="categoria.id">{{categoria.name}}</router-link>
    </ul>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Header',
  mounted () {
    this.$store.dispatch('allCategory');
  },
  props: ['title'],
  computed: mapState([
    'categorys'
  ])
}
</script>

<style lang="scss">
.header-movie{
  display: grid;
  position: fixed;
  z-index: 2;
  grid-template-areas: 
    "menu title search"
    "navbar navbar navbar";
  height: 150px;
  width: 100vw;
  padding: 16px;
  background-color: #010E17;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);


  >.title{
    grid-area: title;
    justify-self: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 26px;
    color: rgba(255, 255, 255, 0.9);
  }

  >.menu{
    grid-area: menu;
    justify-self: start;
    color: rgba(255, 255, 255, 0.5);
  }

  >.search{
    grid-area: search;
    justify-self: end;
    color: rgba(255, 255, 255, 0.5);
  }
  
  .material-icons{
    font-size: 26px;
  }

  .navbar-movie{
    grid-area: navbar;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin: 16px 0;
    overflow: scroll;

    >.item{
      text-decoration: none;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      padding: 16px;
    }

    >.item.active{
      color: white;
      font-size: 24px;
    }
  }
    
}

.navbar-movie::-webkit-scrollbar{
  display: none;
}

</style>