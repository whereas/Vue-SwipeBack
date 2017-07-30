<template>
  <div class="swipeback-box" 
    v-on:touchstart="startMove"
    v-on:touchmove="moving"
    v-on:touchend="endMove"
  >
    A custom component!
  </div>
</template>
<script>
  export default{
    data: function(){
      return {
        moveStart: 0,  //if this>0 canBoxMove
        moveEnd: 0,
        startTime: 0,
        endTime: 0
      }
    },
    methods: {
      startMove:function(e){
        if(e.touches[0].clientX < 60){
          e.target.className = e.target.className.replace(' transition','')
          this.startTime = new Date().getTime()
          this.moveStart = e.touches[0].clientX
        }
      },
      moving:function(e){
        this.moveEnd = e.touches[0].clientX
        if(this.moveStart && (this.moveEnd>this.moveStart) ){
          e.target.style.transform = 'translate3d('+(this.moveEnd - this.moveStart)+'px,0,0)'
        }
      },
      endMove:function(e){
        if(this.moveStart && (this.moveEnd>this.moveStart) ){
          e.target.className = e.target.className == '' ? 'transition' : e.target.className + ' ' + 'transition';
          this.endTime = new Date().getTime()
          if( ((this.endTime-this.startTime<300) && (this.moveEnd-this.moveStart>20)) || 
              (this.moveEnd - this.moveStart > 120)
          ){
            e.target.style.transform = 'translate3d(100%,0,0)'
          }else{
            e.target.style.transform = 'translate3d(0,0,0)'
          }
          this.moveStart = 0
        }
      }
    }
  }
</script>
<style scoped>
  .swipeback-box{
    height: 100%;
    width: 100%;
    background: #aaa;
  }
  .transition{
    transition: transform 0.3s;
  }
</style>