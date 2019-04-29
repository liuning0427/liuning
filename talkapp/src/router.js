import Vue from 'vue'
import Router from 'vue-router'
import People from '@/views/People.vue'
import Message from '@/views/Message.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path:'/message',
     component:Message
   },{
     path:'/people',
     component:People
   }
  ]
})
