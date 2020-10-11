<template>
  <nb-container class="outer">
    <image
      :style="{width: '100%', height: '100%', position: 'absolute', top: -100}"
      :source="require('../assets/announcement.png')" />
    <nb-container>
    <nb-header />
    <nb-content>
      <nb-icon name='home' />
      <nb-icon ios="ios-menu" android="md-menu" :style="{ fontSize: 20, color: 'red' }" />
      <nb-icon type="FontAwesome" name="home"/>
    </nb-content>
  </nb-container>
  </nb-container>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.outer {
  flex: 1;
  justify-content: center;
}

.container {
  flex: 1;
  z-index: 1;
  background-color: transparent;
  padding-top: 350;
}
</style>