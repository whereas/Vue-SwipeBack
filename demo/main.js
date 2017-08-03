import Vue from 'vue'
import VueRouter from 'vue-router'
import SwipeClose from '../swipeclose.js'
import './assets/style.css'

Vue.use(VueRouter)
Vue.use(SwipeClose)


var router = new VueRouter({
  routes : [
    { path: '/home' , component: require('./views/Home.vue') }
  ]
})

new Vue({
  el: '#app',
  name: 'index.html',
  router,
  created(){
    if(this.$route.path == '/'){
      this.$router.push('/home')
    }else{
      this.$router.push(this.$route.path)
    }
  }
})

