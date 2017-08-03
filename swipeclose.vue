<template>
  <div class="swipeclose-box" ref="swipeclosebox"
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
        move_start: 0,  //if this>0 can box move
        move_end: 0,
        last_move_end: 0,
        start_time: 0,
        end_time: 0,
        node: null
      }
    },
    mounted(){
      this.node = this.$refs.swipeclosebox
    },
    methods: {
      startMove:function(e){
        if(e.touches[0].clientX < 30){
          this.start_time = new Date().getTime()
          this.move_start = e.touches[0].clientX
        }
        e.stopPropagation()
      },
      moving:function(e){
        if(this.move_start){
          this.last_move_end = this.move_end
          this.move_end = e.touches[0].clientX
          if(this.move_end > this.move_start){
            this.node.style.transform = 'translate3d('+(this.move_end - this.move_start)+'px,0,0)'
          }
        }
        e.stopPropagation()
      },
      endMove:function(e){
        if(this.move_start){
          if(this.move_end > this.move_start){
            this.node.className = this.node.className + ' transition';
            this.end_time = new Date().getTime()
            var that = this
            setTimeout(function(){
              if( ((that.end_time-that.start_time<300) && (that.move_end-that.move_start>20)) || 
                ((that.move_end-that.move_start>120) && (that.last_move_end<that.move_end))
              ){
                that.node.style.transform = 'translate3d(100%,0,0)'
                that.$emit('close-success')
                if(that.$router){
                  that.$router.go(-1)
                }
              }else{
                that.node.style.transform = 'translate3d(0,0,0)'
                that.resetAnimation()
              }
            },10)
          }else{
            this.node.style.transform = 'translate3d(0,0,0)'
            this.resetAnimation()
          }
          this.move_start = 0
        }
        e.stopPropagation()
      },
      cancelMove: function(e){
        this.node.style.transform = 'translate3d(0,0,0)'
        this.move_start = 0
        this.resetAnimation()
      },
      resetAnimation: function(){
        var that = this
        setTimeout(function(){
          that.node.removeAttribute('style')
          that.node.className = that.node.className.replace(' transition','')
        },500)
      }
    }
  }
</script>
<style scoped>
  .swipeclose-box{
    box-sizing: border-box;
    box-shadow: 0 3px 10px #aaa;
  }
  .swipeclose-box:before{  
    content: "";  
    display: table;  
  }
  .transition{
    transition: transform 0.3s;
  }
</style>