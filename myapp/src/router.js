import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/movie.vue'
import Music from '@/views/music.vue'
import Book from '@/views/book.vue'
import Pic from '@/views/pic.vue'
import MusicList from '@/views/MusicList.vue'
import MovieList from '@/views/MovieList.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/movie",
      component:Movie
    },{
      path:"/music",
      component:Music
    },{
      path:"/book",
      component:Book
    },{
      path:"/pic",
      component:Pic
    },{
      path:"/musiclist",
      component:MusicList
    },{
      path:"/movielist/:id",
      component:MovieList
    }
  ]
})
