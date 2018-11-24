import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    movie: [],
    movies: [],
    categorys: []
  },
  actions: {
    allMovies ({ commit }) {
      axios
        .get('../../static/movieDB.json')
        .then(r => r.data.results)
        .then(movies => {
          commit('SET_MOVIES', movies)
        })
    },

    findMovie ({ commit }, movieid) {
      axios
        .get('../../static/movieDB.json')
        .then(r => {
          r.data.results.map(movie => {
            if (movie.id === parseInt(movieid)) {
              commit('SET_MOVIE', movie)
            }
          })
        })
    },

    allCategory ({ commit }) {
      axios
        .get('../../static/categoryDB.json')
        .then(r => r.data.genres)
        .then(categorys => {
          commit('SET_CATEGORYS', categorys)
        })
    }
  },

  getters: {
    getByCategory: state => genre => {
      return state.movies.filter(movie =>
        movie.genre_ids.includes(parseInt(genre))
      )
    }
  },

  mutations: {
    SET_MOVIE (state, movie) {
      state.movie = movie
    },

    SET_MOVIES (state, movies) {
      state.movies = movies
    },

    SET_CATEGORYS (state, categorys) {
      state.categorys = categorys
    }
  }
})
