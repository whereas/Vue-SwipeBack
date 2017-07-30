import SwipeBackComponent from './swipeback.vue'

var SwipeBack = {
  install : function(Vue){
    Vue.component('swipeback-box', SwipeBackComponent)
  }
}

export default SwipeBack;