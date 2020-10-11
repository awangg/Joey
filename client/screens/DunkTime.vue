<template>
  <nb-container class="outer">
    <image
      :style="{width: '90%', height: '60%'}"
      :source="require('../assets/dunk.gif')" />
    <nb-container class="container">
    </nb-container>
  </nb-container>
</template>

<script>

export default {
  props: {
    navigation: { type: Object }
  },
  data: function() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.outer {
  flex: 1;
  align-items: center;
  justify-content: center;
}
</style>