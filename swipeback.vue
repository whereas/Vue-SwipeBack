<template>
  <div class="swipeclose-box" 
    v-on:touchstart="startMove"
    v-on:touchmove="moving"
    v-on:touchend="endMove"
    v-on:touchcancel="cancelMove"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default{
    data: function(){
      return {
        move_start: 0,  //if this>0 canBoxMove
        move_end: 0,
        last_move_end: 0,
        start_time: 0,
        end_time: 0
      }
    },
    methods: {
      startMove:function(e){
        if(e.touches[0].clientX < 30){
          e.target.className = e.target.className.replace(' transition','')
          this.start_time = new Date().getTime()
          this.move_start = e.touches[0].clientX
        }
      },
      moving:function(e){
        if(this.move_start){
          this.last_move_end = this.move_end
          this.move_end = e.touches[0].clientX
          if(this.move_end > this.move_start){
            e.target.style.transform = 'translate3d('+(this.move_end - this.move_start)+'px,0,0)'
          }
        }
      },
      endMove:function(e){
        if(this.move_start){
          if(this.move_end > this.move_start){
            e.target.className = e.target.className + ' transition';
            this.end_time = new Date().getTime()
            if( ((this.end_time-this.start_time<300) && (this.move_end-this.move_start>20)) || 
                ((this.move_end-this.move_start>120) && (this.last_move_end<this.move_end))
            ){
              e.target.style.transform = 'translate3d(100%,0,0)'
              this.$emit('close-success')
            }else{
              e.target.style.transform = 'translate3d(0,0,0)'
            }
          }else{
            e.target.style.transform = 'translate3d(0,0,0)'
          }
          this.move_start = 0
        }
      },
      cancelMove: function(e){
        e.target.style.transform = 'translate3d(0,0,0)'
        this.move_start = 0
      }
    }
  }
</script>
<style scoped>
  .swipeclose-box{
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
    width: 100%;
    background: #aaa;
  }
  .transition{
    transition: transform 0.3s;
  }
</style>