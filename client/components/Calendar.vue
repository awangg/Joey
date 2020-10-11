<template>
    <nb-container>
      <nb-grid>
      <nb-row :style="{height: '10%'}" v-for="(week, index) in rows" :key="index" class="row">
          <nb-col v-for="(day, uindex) in week" :key="uindex" class="col">
            <nb-text class="day">{{day.day}}</nb-text>
            <nb-text> • </nb-text>
          </nb-col>
        </nb-row>
      </nb-grid>
    </nb-container>
</template>
<script>
export default {
    props: {
    today: { type: String },
    month: { type: String }
    },
  data() {
    return {
      monthStuff: [],
      rows: []
    }
  },
  created() {
    this.thirtyone = [
      'January',
      'March',
      'May',
      'July',
      'August',
      'October',
      'December'
    ]

    let max = 0
    let offset = 0
    if (this.thirtyone.includes(this.month))
    { max = 30,
      offset = 3 }
    else if (this.month == 'February') 
    { max = 27,
      offset = -1}
    else {
      max = 29,
      offset = 4
    }
  
    for (let i = 0; i <= max; i+= 1 ) {
      this.monthStuff.push(
        { 'day': i + 1}
      )
    }

    for (let i = 0; i <= offset; i+= 1 ) {
      this.monthStuff.push(
        { 'day': ''}
      )
    }

    this.rows = this.splitIntoRows(this.monthStuff)
  },
  methods: {
    splitIntoRows(array) {
      let res = []
      for(let i = 0; i < array.length; i+=7) {
        res.push(array.slice(i, i+7))
      }
      return res
    },
  }
}
</script>

<style scoped>
.col .day{
  border-style: solid;
}
</style>