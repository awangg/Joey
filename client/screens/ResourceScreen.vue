<template>
  <nb-container class="outer">
    <image
      :style="{width: '100%', height: '100%', position: 'absolute', top: -100}"
      :source="require('../assets/announcement.png')" />
    <nb-container class="container">
    <nb-content>
       <nb-list>
        <nb-list-item selected>
          <nb-left>
            <nb-text>Duncan Facebook Page</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item>
          <nb-left>
            <nb-text>Duncan Website</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item>
          <nb-left>
            <nb-text>Anonymous Feedback Form</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item>
          <nb-left>
            <nb-text>PAA Question Form</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>

      </nb-list>
    </nb-content>
  </nb-container>
  </nb-container>
</template>

<script>
import Icon from 'react-native-vector-icons/FontAwesome';
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
  padding-left: 20;
  padding-right: 20;
}

.col1{
  background-color: #a8ce78;
  height: 20;
}
</style>