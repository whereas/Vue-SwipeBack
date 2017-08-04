import SwipeCloseComponent from './swipeclose.vue'

var SwipeClose = {
  install : function(Vue, options){
    if(options.enable){
      Vue.component('swipeclose-box', SwipeCloseComponent)
    }else{
      Vue.component('swipeclose-box', {
        template: '<div><slot></slot></div>'
      })
    }
  }
}

export default SwipeClose;