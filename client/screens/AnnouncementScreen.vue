<template>
  <nb-container class="outer">
    <image
      :style="{width: '100%', height: '100%', position: 'absolute', top: -50}"
      :source="require('../assets/announcement.png')" />
    <nb-container class="container">
      <nb-accordion :dataArray="announcements"
        :headerStyle="{ padding: 20, backgroundColor: '#fafafa' }" expanded="0" />
    </nb-container>
  </nb-container>
</template>

<script>
import config from '../config';
import store from '../utils/store';
import React from 'react';
import axios from 'axios';

import Announcement from '../components/Announcement';

export default {
  components: { Announcement }, 
  data() {
    return {
      announcements: []
    }
  },
  created() {
    this.getAllAnnouncements()
  },
  methods: {
    getAllAnnouncements() {
      axios({
        method: 'get',
        url: `${config.api.BASE_URL}/announcements/`,
        headers: {
          Authorization: `Bearer ${store.state.token}`
        }
      }).then( (response) => {
        this.announcements = response.data.reverse().map(item => { return { title: item.title, content: item.message } })
      }).catch( (err) => {
        console.log(err)
      })
    },
    renderAnnouncement(item) {
      console.log(item)
      return (<Announcement title={item.item.title} message={item.item.message} />)
    }
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
}
</style>