<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button info :on-press="decrementMonth">
          <nb-icon active name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>{{ calendar[current] }}</nb-title>
      </nb-body>
      <nb-right>
        <nb-button info :on-press="incrementMonth">
          <nb-icon active name="arrow-forward" />
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-container>
      <Calendar :month="current+1" :days="days[current]" :events="eventsByMonth[current]" @registered="getAllEvents" />
    </nb-container>
  </nb-container>
</template>

<script>
import moment from 'moment'
import React from 'react'
import { Text } from 'react-native'
import axios from 'axios'

import config from '../config'
import store from '../utils/store'
import Calendar from '../components/Calendar'

export default {
  props: {
    navigation: { type: Object } 
  },
  components: { Calendar },
  data() {
    return {
      calendar: ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'],
      days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      eventsByMonth: [
        [], [], [], [], [], [], [], [], [], [], [], []
      ],
      current: 0
    }
  },
  created() {
    this.current = moment().month()
    this.getAllEvents()
  },
  methods: {
    decrementMonth() {
      this.current = (this.current - 1) % 12;
    },
    incrementMonth() {
      this.current = (this.current + 1) % 12;
    },
    getAllEvents() {
      this.eventsByMonth = [
        [], [], [], [], [], [], [], [], [], [], [], []
      ],
      axios({
        method: 'get',
        url: `${config.api.BASE_URL}/events/`,
        headers: {
          Authorization: `Bearer ${store.state.token}`
        }
      }).then( (response) => {
        response.data.forEach( (event) => {
          let month = parseInt(event.date.substring(5, 7))
          event.date = moment(event.date).format('YYYY-MM-DD HH:mm')
          this.eventsByMonth[month-1].push(event)
          this.eventsByMonth[month-1].sort((a, b) => new Date(a.date.split(' ')[0]) - new Date(b.date.split(' ')[0]))
        })
      })
    }
  }
}
</script>

<style scoped>
</style>