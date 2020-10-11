<template>
  <nb-container class="outer">
    <image
      :style="{width: '100%', height: '100%', position: 'absolute'}"
      :source="require('../assets/authbg.png')" />
    <nb-container class="container">
      <nb-h1 class="title"> Signup for Joey </nb-h1>
      <nb-form>
        <nb-item stackedLabel>
          <nb-label>Email</nb-label>
          <nb-input v-model="form.email" />
        </nb-item>
        <nb-item stackedLabel>
          <nb-label>Password</nb-label>
          <nb-input :secureTextEntry="true" v-model="form.password" />
        </nb-item>
        <nb-item stackedLabel>
          <nb-label>Full Name</nb-label>
          <nb-input v-model="form.name" />
        </nb-item>
        <nb-item stackedLabel>
          <nb-label>Birthday (YYYY-MM-DD)</nb-label>
          <nb-input v-model="form.birthday" />
        </nb-item>
      </nb-form>
      <nb-button block primary class="button" :on-press="sendSignupRequest"><nb-text>Sign Up</nb-text></nb-button>
    </nb-container>
  </nb-container>
</template>

<script>
import config from '../config';
import store from '../utils/store';
import axios from 'axios';

export default {
  props: {
    navigation: { type: Object }
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        name: '',
        birthday: ''
      }
    }
  },
  methods: {
    sendSignupRequest() {
      axios({
        method: 'post',
        url: `${config.api.BASE_URL}/auth/signup`,
        data: {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name,
          birthday: this.form.birthday
        }
      }).then( (response) => {
        store.commit('setToken', response.data.token)
        this.navigation.navigate('Tabs')
      }).catch( (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.outer {
  flex: 1;
  align-items: center;
  justify-content: center;
}

.container {
  flex: 1;
  justify-content: center;
  z-index: 1;
  background-color: transparent;
}

.title {
  text-align: center;
  margin-bottom: 50;
}

.button {
  margin-top: 50;
  margin-left: 100;
  margin-right: 100;
  background-color: #1a491a;
}
</style>