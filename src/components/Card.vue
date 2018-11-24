<template>
  <router-link :to="/movie/+movie.id" class="card-movie">
    <img class="imagem" :src="movie.poster_path_full">
    <h1 class="title">{{movie.title}}</h1>
    <h2 class="genre">{{movie.categoria}}</h2>
    <h2 class="date">Lançamento: {{movie.release_date}}</h2>
  </router-link>
</template>

<script>
export default {
  props: ['movie']
}
</script>


<style lang="scss">
@import '../assets/css/Settings/colors.scss';
.card-movie {
  display: grid;
  grid-template-columns: 42% auto;
  grid-template-rows: 35% 40% 25%;
  grid-template-areas: "poster title" "poster genre" "poster date";
  width: 100%;
  height: 180px;
  margin-bottom: 3rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: $color-dark-primary;
  text-decoration: none;
  color: white;
  > .imagem {
    grid-area: poster;
    position: relative;
    width: 130px;
    height: 195px;
    top: -8px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  > .title {
    grid-area: title;
    justify-self: start;
    padding-top: 20px;
    font-size: 18px;
    font-weight: 500;
  }
  > .genre {
    grid-area: genre;
    justify-self: start;
    color: $color-light-primary;
    font-size: 14px;
    font-weight: 300;
  }
  > .date {
    grid-area: date;
    justify-self: start;
    color: $color-light-secundary;
    font-size: 14px;
    font-weight: 400;
  }
}

</style>
