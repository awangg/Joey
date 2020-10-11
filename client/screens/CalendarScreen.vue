<template>
  <view class="container">
  <nb-container>
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
        <nb-button :on-press="getMonth">
          <text>MONTHMONTH</text>
        </nb-button>
      </nb-right>
      <nb-grid>
        <nb-row>
          <nb-col :style="{ backgroundColor: '#635DB7' }"></nb-col>
          <nb-col :style="{ backgroundColor: '#00CE9F' }"></nb-col>
        </nb-row>
      </nb-grid>
  </nb-container>
  <nb-container>
      <Calendar />
  </nb-container>
  </view>
</template>

<script>
import Calendar from '../components/Calendar'

export default {
  props: {
    navigation: { type: Object } 
  },
  components: { Calendar },
  data() {
    return {
      monthNum: 0,
      months: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
          ]
    }
  },
  created() {
    this.getMonth()
  },
  methods: {
        goBack: function() {
            this.monthNum = this.monthNum - 1
            alert('MWAHAHAHA GO BACK: ' + this.months[this.monthNum])
        },
        goNext: function() {
            this.monthNum = this.monthNum + 1
            alert('MWAHAHAHA GO NEXT: ' + this.months[this.monthNum])
        },
        getMonth: function() {
          var today = new Date()
          var dd = String(today.getDate()).padStart(2, '0') // get the DAY
          this.monthNum = String(today.getMonth() + 1).padStart(2, '0') - 1
          alert(this.months[this.monthNum])
          return this.months[this.monthNum]
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
