<template>
  <main class="movie-main">
    <section class="movie-banner">
      <img class="banner" :src="'http://image.tmdb.org/t/p/w500'+movie.backdrop_path">
      <a href="javascript:history.go(-1)" class="back"><i class="material-icons">arrow_back</i></a>
    </section>
    <section class="movie-title">
      <img class="poster" :src="'http://image.tmdb.org/t/p/w500'+movie.poster_path">
      <div class="info">
        <h1 class="title">{{movie.title}}</h1>
        <p class="category">{{movie.categoria}}</p>
        <p class="release">{{movie.release_date}}</p>
      </div>
    </section>
    <section class="movie-vote">
      <div class="item">
        <p class="description">Média de votos</p>
        <p class="votes">{{movie.vote_average}}<span class="base"> / 10 </span></p>
      </div>
      <div class="item">
        <p class="description">Popularidade</p>
        <p class="votes">{{movie.popularity}}</p>
      </div>
    </section>
    <section class="movie-story">
      <h2 class="title">Enredo:</h2>
      <p class="story">{{movie.overview}}</p>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Movie',
  data () {
    return {
    }
  },

  mounted () {
    this.$store.dispatch('findMovie', this.$route.params.id)
  },

  computed: {
    ...mapState(['movie'])
  }
}
</script>

<style lang="scss">
.movie-main{
  position: relative;
}
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

  >.back{
    position: absolute;
    top: 16px;
    left: 16px;
    text-decoration: none;

    >*{
      font-size: 2em;
      font-weight: 700;
      color: white;
    }
  }
}

.movie-title{
  display: grid;
  grid-template-columns: 110px auto;
  grid-template-areas:
  "poster info";
  margin-top: -12%;
  padding: 0 16px;

  >.poster{
    grid-area: poster;
    width: 96px;
    height: 168px;
   box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
  }

  >.info{
    grid-area: info;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-end;
    box-sizing: border-box;
    overflow: hidden;
    line-height: .8em;
    color: white;

    >.title{
      font-size: 20px;
      font-weight: 700;
    }
    >.category, >.release{
      font-size: 16px;
      font-weight: 300;
      margin: 16px 0;
    }
  }
}

.movie-vote{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  margin-top: 10%;
  padding: 0 16px;

  >.item{
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin: 0 16px;
    >.description{
      font-size: 16px;
      font-weight: 600;
    }
    >.votes{
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
    .base {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

.movie-story{
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 10%;
  padding: 0 16px;

  >.title{
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 1em;
  }

  >.story{
    color: rgba(255, 255, 255, 0.7);
    text-align: justify;
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
  }
}

@media screen and (min-width: 600px) {

  .banner{
    width: 100%;
    max-height: 300px;
  }

  .movie-title{
    grid-template-columns: 15rem auto;
    >.poster{
      width: 14rem;
      height: auto;
    }
    >.info{
      justify-content: flex-end;
      line-height: 1.2em;
      padding-top: 3em;
      >.title{
        font-size: 2em;
      }
      >.category, >.release{
        font-size: 1.2em;
      }
    }
  }

  .movie-vote{
    margin-top: 5%;

    >.item{
      >.description{
        font-size: 1.2em;
      }
      >.votes{
        font-size: 1.4em;
      }
      .base {
        font-size: .8em;
      }
    }
  }

  .movie-story{
    margin: 3% 0;
    >.title{
      color: white;
      font-size: 1.4em;
    }
    >.story{
      line-height: 1.4em;
      font-size: 1.2em;
    }
  }
}
</style>
