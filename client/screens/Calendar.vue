<template>
  <view class="container">
    
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
}

body {
	background: #ccc;
	font: 87.5%/1.5em 'Lato', sans-serif;
	margin: 0;
}

</style>