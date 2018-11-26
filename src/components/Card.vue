<template>
  <router-link :to="/movie/+movie.id" class="card-movie">
    <img class="imagem" :src="movie.poster_path_full">
    <div class="info">
      <p class="title">{{movie.title}}</p>
      <p class="genre">{{movie.categoria}}</p>
      <p class="date">Lançamento: {{movie.release_date}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['movie'],
  methods: {
  }
}
</script>

<style lang="scss">
@import '../assets/css/Settings/colors.scss';
.card-movie {
  display: grid;
  grid-template-columns: 9rem 1% auto;
  grid-template-areas: "poster . info";
  width: 100%;
  max-height: 180px;
  height: auto;
  padding-right: 1.2rem;
  margin-bottom: 3rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: $color-dark-primary;
  text-decoration: none;
  color: white;
  > .imagem {
    grid-area: poster;
    position: relative;
    max-height: 15rem;
    max-width: 8rem;
    width: auto;
    height: auto;
    top: -8px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  >.info{
    grid-area: info;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
    line-height: 1em;

  > .title {
    font-size: 1.2em;
    font-weight: 500;
  }
  > .genre {
    color: $color-light-primary;
    font-size: .9em;
    font-weight: 300;
  }
  > .date {
    color: $color-light-secundary;
    font-size: .9em;
    font-weight: 400;
  }
  }
}

</style>
