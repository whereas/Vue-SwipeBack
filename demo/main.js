import Vue from 'vue'
import VueRouter from 'vue-router'
import SwipeClose from '../swipeclose.js'
import './assets/style.css'

const my_env = 1 ? 'app' : 'web'

Vue.use(VueRouter)
Vue.use(SwipeClose, {enable: my_env=='app'?true:false})


var router = new VueRouter({
  routes : [
    { path: '/home' , component: require('./views/Home.vue') ,
      children: [
        { path: 'a' , component: require('./views/a.vue') }
      ]
    }
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

