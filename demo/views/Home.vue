<template>
  <div class="height100view">
    <ul>
      <li v-for="item in routers"><router-link :to="item.url">{{item.title}}</router-link></li>
    </ul>
    <transition name="slide"><router-view></router-view></transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      routers:[
        { title: '页面A', url: '/home/a' }
      ]
    }
  }
}
</script>