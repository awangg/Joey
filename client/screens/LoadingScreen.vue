<template>
  <view class="container">
    <image
      :style="{width: '100%', height: '100%', position: 'absolute'}"
      :source="require('../assets/authbg.png')" />
    <image
      :style="{width: 250, height: 250, zIndex: 1}" 
      :source="require('../assets/jump.gif')" />
    <text class="welcome"> Welcome to Joey! </text>
  </view>
</template>

<script>
export default {
  props: {
    navigation: { type: Object } 
  },
  mounted() {
    let _this = this;
    setTimeout(function () { _this.navigation.navigate('Auth') }, 2000)
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.welcome {
  font-size: 24;
  color: #69553f;
  font-weight: 700;
}
</style>