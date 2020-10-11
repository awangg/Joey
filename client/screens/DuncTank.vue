<template>
  <nb-container class="outer">
    <image
      :style="{width: '75%', height: '80%'}"
      :source="require('../assets/tank.png')" />
    <nb-container class="container">
      <nb-grid>
        <nb-row v-for="(quadruplet, index) in rows" :key="index" class="row">
          <nb-col v-for="(user, uindex) in quadruplet" :key="uindex" @press="dunkUser(user.image, user.name)" class="col">
            <nb-thumbnail :source="propics[uindex + 4*index]" />
            <nb-text class="small">{{user.name}}</nb-text>
          </nb-col>
        </nb-row>
      </nb-grid>
    </nb-container>
  </nb-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

import config from '../config';
import store from '../utils/store';
import person from '../assets/person.png';
import images from '../utils/images'

export default {
  props: {
    navigation: { type: Object }
  },
  data() {
    return {
      person: person,
      users: [],
      rows: [],
      propics: []
    }
  },
  created() {
    this.getAllBirthdayUsers()
  },
  methods: {
    splitIntoRows(array) {
      let res = []
      for(let i = 0; i < array.length; i+=4) {
        res.push(array.slice(i, i+4))
      }
      return res
    },
    dunkUser(image, name) {
      this.navigation.navigate('DunkTime', { image: image, name: name })
    },
    getAllBirthdayUsers() {
      console.log('asdf')
      axios({
        method: 'get',
        url: `${config.api.BASE_URL}/users/`,
        headers: {
          Authorization: `Bearer ${store.state.token}`
        }
      }).then( (response) => {
        console.log('asdf')
        console.log(moment().format('MM-DD'))
        this.users = response.data.filter(o => o.birthday.substring(5, 10) == moment().format('MM-DD'))
        this.propics = this.users.map(o => images[parseInt(o.image)-1])
        console.log(this.users)
        this.rows = this.splitIntoRows(this.users)
      })
    }
  }
}
</script>

<style scoped>
.outer {
  flex: 1;
  align-items: center;
}

.container {
  width: 90%;
  background-color: transparent;
  margin-top: -50;
}

.row,
.col {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  background-color: transparent;
}

.small {
  font-size: 12;
}
</style>