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
      axios.all([
        axios.get('../../static/categoryDB.json'),
        axios.get('../../static/movieDB.json')
      ])
        .then(axios.spread(function (categoryResponse, moviesResponse) {
          var categorias = categoryResponse.data.genres
          var filmes = moviesResponse.data.results
          var allRequests = [categorias, filmes]
          commit('SET_MOVIES', allRequests)
        }))
    },

    findMovie ({ commit }, movieid) {
      axios.all([
        axios.get('../../static/categoryDB.json'),
        axios.get('../../static/movieDB.json')
      ])
        .then(axios.spread(function (categoryResponse, moviesResponse) {
          var categorias = categoryResponse.data.genres
          var filme
          moviesResponse.data.results.map(movie => {
            if (movie.id === parseInt(movieid)) {
              filme = movie
            }
          })

          var allRequests = [categorias, filme]
          commit('SET_MOVIE', allRequests)
        }))
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
    moviesByCategory: state => genre => {
      return state.movies.filter(movie =>
        movie.genre_ids.includes(parseInt(genre))
      )
    }
  },

  mutations: {
    SET_MOVIE (state, allRequests) {
      var categorys = allRequests[0]
      var movie = allRequests[1]
      movie.categoria = ''
      movie.poster_path_full = 'http://image.tmdb.org/t/p/w500' + movie.poster_path
      movie.genre_ids.forEach(item => {
        categorys.map(cat => {
          if (cat.id === item) {
            movie.categoria += `${cat.name}, `
          }
        })
      })
      state.movie = movie
    },

    SET_MOVIES (state, allRequests) {
      var categorys = allRequests[0]
      var movies = allRequests[1]
      movies.map(movie => {
        movie.categoria = ''
        movie.poster_path_full = 'http://image.tmdb.org/t/p/w500' + movie.poster_path
        movie.genre_ids.forEach(item => {
          categorys.map(cat => {
            if (cat.id === item) { movie.categoria += `${cat.name}, ` }
          })
        })
      })
      state.movies = movies
    },

    SET_CATEGORYS (state, categorys) {
      state.categorys = categorys
    }
  }
})
