<template>
  <view class="container">
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button :on-press="goBack">
          <text>previous</text>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>MONTH</nb-title>
      </nb-body>
      <nb-right> 
        <nb-button :on-press="goNext">
          <text>next</text>
        </nb-button>
      </nb-right>
    </nb-header>
          <nb-grid>
            <nb-row>
              <nb-col :style="{ backgroundColor: '#635DB7' }"></nb-col>
              <nb-col :style="{ backgroundColor: '#00CE9F' }"></nb-col>
            </nb-row>
          </nb-grid>
  </nb-container>
  </view>
</template>

<script>
import Calendar from '../components/Calendar'

export default {
  props: {
    navigation: { type: Object } 
  },
  components:
  {
    Calendar
  },
  methods: {
        goBack: function() {
            alert('MWAHAHAHA GO BACK')
        },
        goNext: function() {
            alert('MWAHAHAHA GO NEXT')
        }
    }
}

</script>

<style scoped>
.container {
  flex: 1;
  justify-content: center;
  align-items: center;
}


body {
	background: #ccc;
	font: 87.5%/1.5em 'Lato', sans-serif;
	margin: 0;
}

.container {
  min-width: 100%
}
</style>
