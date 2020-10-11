<template>
  <nb-container>
    <nb-grid>
      <nb-row v-for="(week, index) in rows" :key="index" class="row">
        <nb-col v-for="(day, dindex) in week" :key="dindex" :class="getDayColor(day - 1)">
          <nb-text v-if="day <= days"> {{ day }} </nb-text>
        </nb-col>
      </nb-row>
    </nb-grid>
    <nb-container>
      <flat-list v-if="readyToLoad" :data="events"
        :render-item="(item) => renderEvent(item)" />
    </nb-container>
  </nb-container>
</template>

<script>
import React, { Component } from 'react';
import { Container, Card, CardItem, Body, Text, H1, H3, Left, Right, Accordion, Button } from 'native-base';
import moment from 'moment';
import axios from 'axios';

import config from '../config';
import store from '../utils/store';

export default {
  props: {
    month: { type: Number },
    days: { type: Number },
    events: { type: Array }
  },
  watch: {
    days(update) {
      this.days = update
      this.rows = this.splitIntoRows(this.days)
    },
    events(update) {
      this.events = update
      this.getRegisteredEvents()
    }
  },
  data() {
    return {
      rows: [],
      registered: [],
      readyToLoad: false
    }
  },
  created() {
    this.getRegisteredEvents()
  },
  mounted() {
    this.rows = this.splitIntoRows(this.days)
  },
  methods: {
    splitIntoRows(days) {
      let res = []
      for(let i = 1; i <= days; i += 7) {
        let row = []
        for(let j = i; j < i + 7; j++) {
          row.push(this.formatDay(j))
        }
        res.push(row)
      }
      return res
    },
    formatDay(day) {
      return day < 10 ? "0" + day : day.toString()
    },
    getDayColor(day) {
      if(this.dayHasEvent(day)) return { col: true, event: true }
      return day % 2 == 0 && day < this.days ? { col: true, gray: true } : { col: true, white: true }
    },
    dayHasEvent(day) {
      let formatted = this.formatDay(this.month) + '-' + this.formatDay(day + 1)
      return this.events.find(o => o.date.includes(formatted))
    },
    renderEvent(event) {
      console.log(this.registered)
      return (<Container style={{marginBottom: -350}}>
                <H1 style={{marginBottom: 10}}> {moment(event.item.date).format('dddd, MMMM Do YYYY')} </H1>
                <H3 style={{marginBottom: 10}}> {moment(event.item.date).format('hA')} </H3>
                <Card>
                  <CardItem header>
                    <Left>
                      <H1> {event.item.title} </H1>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                        {event.item.description}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    {!this.registered.includes(event.item._id) && <Button success onPress={() => {this.registerForEvent(event.item._id)}}>
                      <Text> Register </Text>
                    </Button>}
                    {this.registered.includes(event.item._id) && <Button danger onPress={() => {this.cancelOnEvent(event.item._id)}}>
                      <Text> Cancel </Text>
                    </Button>}
                    <Text style={{marginLeft: 10}}> {event.item.registered.length} registered </Text>
                  </CardItem>
                </Card>
              </Container>)
    },
    registerForEvent(eventId) {
      axios({
        method: 'put',
        url: `${config.api.BASE_URL}/users/events/${eventId}`,
        headers: {
          Authorization: `Bearer ${store.state.token}`
        }
      }).then( (response) => {
        this.$emit('registered')
      }).catch( (err) => {
        console.log('request failed')
      })
    },
    cancelOnEvent(eventId) {
      axios({
        method: 'delete',
        url: `${config.api.BASE_URL}/users/events/${eventId}`,
        headers: {
          Authorization: `Bearer ${store.state.token}`
        }
      }).then( (response) => {
        this.$emit('registered')
      }).catch( (err) => {
        console.log('request failed')
      })
    },
    getRegisteredEvents() {
      axios({
        method: 'get',
        url: `${config.api.BASE_URL}/auth/me`,
        headers: {
          Authorization: `Bearer ${store.state.token}`
        }
      }).then( (response) => {
        this.registered = response.data.events.map(x => x._id)
        this.readyToLoad = true
      }).catch( (err) => {
        console.log(err.response)
      })
    }
  }
}
</script>

<style scoped>
.row {
  height: 60;
}

.col {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.gray {
  background-color: #eaeaea;
}

.event {
  background-color: #a8ce78;
}
</style>