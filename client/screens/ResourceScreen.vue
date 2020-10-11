<template>
  <nb-container class="outer">
    <image
      :style="{width: '100%', height: '60%', position: 'absolute', top: -100}"
      :source="require('../assets/question.png')" />
    <nb-container class="container">
    <nb-content>
       <nb-list>
        <nb-list-item :on-press="onPressFB">
          <nb-left>
            <nb-text>Duncan Facebook Page</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item :on-press="onPressWeb">
          <nb-left>
            <nb-text>Duncan Website</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item :on-press="onPressAnon">
          <nb-left>
            <nb-text>Anonymous Feedback Form</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item :on-press="onPressPAA">
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
import {
  Linking
} from 'react-native';
export default {
   methods: {
        onPressFB: function() {
            Linking.openURL("https://www.facebook.com/groups/201995963184811");
        },
        onPressWeb: function() {
            Linking.openURL("https://duncan.rice.edu/");
        },
        onPressAnon: function() {
            Linking.openURL("https://duncan.rice.edu/anonymous-feedback-form/");
        },
        onPressPAA: function() {
            Linking.openURL("https://docs.google.com/forms/d/1iK2H8cst44XZ3uIAArOJVJr1gtgYViV9Ao-5XxAc5GM/viewform?edit_requested=true");
        },
    }
}
</script>

<style scoped>
.outer {
  flex: 1;
  margin-top: 50;
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