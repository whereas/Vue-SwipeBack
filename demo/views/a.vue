<template>
  <swipeclose-box class="childview">
    <div @click="$router.go(-1)">
      go back
    </div>
  </swipeclose-box>
</template>

<script>
export default {
  name: 'a'
}
</script>