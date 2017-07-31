import Vue from 'vue'
import VueRouter from 'vue-router'
import SwipeBack from './v-swipeback.js'

Vue.use(VueRouter)
Vue.use(SwipeBack)


var router = new VueRouter({
  routes : [
    // resolve => require(['./LoginView.vue'], resolve)
    { path: '/app' , component: require('./App.vue') }
  ]
})

new Vue({
  el: '#app',
  data(){
    return {
      message: 1
    }
  },
  router,
  created(){
  }
})

