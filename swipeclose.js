import SwipeCloseComponent from './swipeclose.vue'

var SwipeClose = {
  install : function(Vue){
    Vue.component('swipeclose-box', SwipeCloseComponent)
  }
}

export default SwipeClose;