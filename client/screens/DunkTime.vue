<template>
  <nb-container class="outer">
    <image
      :style="{width: '90%', height: '60%', position: 'absolute', zIndex: 1}"
      :source="require('../assets/dunk.gif')" />
    <nb-container>
      <animated:view
        class="animated-view-style"
        :style="{
          marginTop: movingMargin,
          transform: [{rotate: spin}] }">
          <image
            :style="{width: 200, height: 200}"
            :source="image" />
        </animated:view>
    </nb-container>
  </nb-container>
</template>

<script>
import { Animated, Easing } from "react-native";
import images from '../utils/images';

export default {
  props: {
    navigation: { type: Object }
  },
  data: function() {
    return {
      spinValue: 0,
      spin: "0deg",
      animatedValueRotate: 0,
      movingMargin: 0,
      image: ''
    }
  },
  created() {
    this.spinValue = new Animated.Value(0);
    this.animatedValueRotate = new Animated.Value(0);
  },
  mounted() {
    this.image = images[Math.trunc(Math.random() * images.length)]
    this.animationRotate()
  },
  methods: {
    animationRotate: function() {
      this.spinValue.setValue(0);
      this.animatedValueRotate.setValue(0);

      Animated
        .sequence([
          Animated.parallel([
            Animated.timing(this.spinValue, {
              toValue: 1,
              duration: 900,
              easing: Easing.linear,
              useNativeDriver: false
            }),
            Animated.timing(this.animatedValueRotate, {
              toValue: 1,
              duration: 900,
              easing: Easing.linear,
              useNativeDriver: false
            })
          ], { useNativeDriver: false })
        ], { useNativeDriver: false })
        .start(() => {
          setTimeout(() => { this.navigation.navigate('Tabs') }, 1000)
        })

      this.spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
      });

      this.movingMargin = this.animatedValueRotate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 350]
      });
    }
  }
}
</script>

<style scoped>
.outer {
  flex: 1;
  align-items: center;
  justify-content: center;
}

.animated-view-style {
  height: 200;
  width: 200;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  justify-content: center;
  flex:1;
}

.name {
  font-size: 36;
  padding: 20;
  margin-top: -175;
}
</style>