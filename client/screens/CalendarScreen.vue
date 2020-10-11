<template>
  <nb-container class="container">
    <nb-header>
      <nb-left>
        <nb-button :on-press="goBack">
          <text>previous</text>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>{{month}}</nb-title>
      </nb-body>
      <nb-right> 
        <nb-button :on-press="goNext">
          <text>next</text>
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content>
      <Calendar v-bind:month="this.month" v-bind:today="this.todayDate" />
    </nb-content>
  </nb-container>
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
          ],
      month: 'January',
      todayDate: ''
    }
  },
  created() {
    this.getMonth()
  },
  methods: {
        goBack: function() {
            this.monthNum = this.monthNum - 1
            if (this.monthNum == -1) {
              this.monthNum = 11
            }
            this.month = this.months[this.monthNum]
        },
        goNext: function() {
            this.monthNum = this.monthNum + 1
            if (this.monthNum > 11) {
              this.monthNum = 0
            }
            this.month = this.months[this.monthNum]
        },
        getMonth: function() {
          var today = new Date()
          var dd = String(today.getDate()).padStart(2, '0') // get the DAY
          this.monthNum = String(today.getMonth() + 1).padStart(2, '0') - 1
          this.month = this.months[this.monthNum]
          this.todayDate = String(today.getMonth() + 1).padStart(2, '0') + '-' + dd
          return this.month
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
