import Vue from 'vue'
import Router from 'vue-router'
import Movies from '../components/Movies.vue'
import Movie from '../components/Movie.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/movies/:category',
      name: 'MoviesCategory',
      component: Movies
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    }
  ]
})
