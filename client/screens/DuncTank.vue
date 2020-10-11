<template>
  <nb-container class="outer">
    <image
      :style="{width: '75%', height: '60%'}"
      :source="require('../assets/tank.png')" />
    <nb-container :style="{width: '90%'}">
      <nb-h3 class="title">Today's Birthdays</nb-h3>
      <nb-grid>
        <nb-row v-for="(quadruplet, index) in rows" :key="index" class="row">
          <nb-col v-for="(user, uindex) in quadruplet" :key="uindex" @press="dunkUser(user.image, user.name)" class="col">
            <nb-thumbnail :source="person" />
            <nb-text>{{user.name}}</nb-text>
          </nb-col>
        </nb-row>
      </nb-grid>
    </nb-container>
  </nb-container>
</template>

<script>
import person from '../assets/person.png';

export default {
  props: {
    navigation: { type: Object }
  },
  data() {
    return {
      person: person,
      users: [],
      rows: []
    }
  },
  created() {
    this.users = [
      {
        image: '../assets/person.png',
        name: 'Person A'
      },
      {
        image: '../assets/person.png',
        name: 'Person B'
      },
      {
        image: '../assets/person.png',
        name: 'Person C'
      },
      {
        image: '../assets/person.png',
        name: 'Person D'
      },
      {
        image: '../assets/person.png',
        name: 'Person E'
      },
      {
        image: '../assets/person.png',
        name: 'Person F'
      },
      {
        image: '../assets/person.png',
        name: 'Person G'
      },
      {
        image: '../assets/person.png',
        name: 'Person H'
      }
    ]
    this.rows = this.splitIntoRows(this.users)
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
    }
  }
}
</script>

<style scoped>
.outer {
  flex: 1;
  align-items: center;
}

.row,
.col {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
}
</style>