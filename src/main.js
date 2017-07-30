import Vue from 'vue'
import VueRouter from 'vue-router'
import vueTap from 'v-tap'
import SwipeBack from '../v-swipeback.js'

Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(SwipeBack)


var router = new VueRouter({
  routes : [
    // resolve => require(['./LoginView.vue'], resolve)
    { path: '/app' , component: require('./App.vue') }
  ]
})

Vue.prototype.moveBack = function(_this,el){
  var moveStart = 0,moveEnd = 0,startTime = 0,endTime = 0
  var parent = el.parentNode
  el.ontouchstart = function(e){
    if(e.touches[0].clientX < 50){
      startTime = new Date().getTime()
      parent.setAttribute('class','noTapBarView')
      moveStart = e.touches[0].clientX
    }
  }
  el.ontouchmove = function(e){
    if(moveStart > 0){
      moveEnd = e.touches[0].clientX
      parent.style.transform = 'translate3d('+(moveEnd - moveStart)+'px,0,0)'
      // if( e.touches[0].clientX - moveTag > 50 ){
      //   moveTag = 0
      //   if(!global.isSubView){
      //     _this.$router.push(url)
      //   }
      // }
    }
  }
  el.ontouchend = function(e){
    if(moveStart == 0){
      return 0
    }
    endTime = new Date().getTime();
    parent.setAttribute('class','noTapBarView trans')
    if( ((endTime-startTime<300) && (moveEnd-moveStart>20)) || (moveEnd - moveStart > 120)){
      parent.style.transform = 'translate3d(100%,0,0)'
      _this.$router.go(-1)
    }else{
      parent.style.transform = 'translate3d(0,0,0)'
    }
    moveStart = 0
    setTimeout(function(){
      parent.setAttribute('class','noTapBarView')
      parent.style = ''
    },400)
  }
  el.ontouchcancel = function(){
    moveStart = 0
  }
}

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

