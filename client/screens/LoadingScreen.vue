<template>
  <nb-container class="container">
    <image
      :style="{width: '100%', height: '100%', position: 'absolute'}"
      :source="require('../assets/authbg.png')" />
    <nb-container class="inner">
      <image
        :style="{width: 250, height: 250, zIndex: 1}" 
        :source="require('../assets/jump.gif')" />
      <nb-container class="buttons">
        <nb-button class="btn btn-login" :on-press="toggleLoginOverlay"><nb-text>Login</nb-text></nb-button>
        <nb-button bordered dark class="btn btn-signup" :on-press="toggleRegisterOverlay"><nb-text>Register</nb-text></nb-button>
      </nb-container>
    </nb-container>

    <Overlay :isVisible="registerOverlay" :onBackdropPress="toggleRegisterOverlay">
      <nb-form class="overlayform">
        <nb-h1 class="title"> Good to see you! </nb-h1>
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
        <nb-button block info class="button" :on-press="sendSignupRequest"><nb-text>Login</nb-text></nb-button>
        <nb-text class="error" v-if="error">{{error}}</nb-text>
      </nb-form>
    </Overlay>

    <Overlay :isVisible="loginOverlay" :onBackdropPress="toggleLoginOverlay">
      <nb-form class="overlayform">
        <nb-h1 class="title"> Welcome Back! </nb-h1>
        <nb-item floatingLabel>
          <nb-label>Email</nb-label>
          <nb-input v-model="form.email" />
        </nb-item>
        <nb-item floatingLabel>
          <nb-label>Password</nb-label>
          <nb-input :secureTextEntry="true" v-model="form.password" />
        </nb-item>
        <nb-button block info class="button" :on-press="sendLoginRequest"><nb-text>Login</nb-text></nb-button>
        <nb-text class="error" v-if="error">{{error}}</nb-text>
      </nb-form>
    </Overlay>
  </nb-container>
</template>

<script>
import React from 'react';
import { Overlay } from 'react-native-elements';

import config from '../config';
import store from '../utils/store';
import axios from 'axios';

export default {
  components: { Overlay },
  props: {
    navigation: { type: Object } 
  },
  data() {
    return {
      form: {
        email: 'test1@test',
        password: 'test',
        name: '',
        birthday: ''
      },
      error: '',
      loginOverlay: false,
      registerOverlay: false
    }
  },
  mounted() {
    let _this = this;
    // setTimeout(function () { _this.navigation.navigate('Auth') }, 2000)
  },
  methods: {
    toggleLoginOverlay() {
      this.loginOverlay = !this.loginOverlay
    },
    toggleRegisterOverlay() {
      this.registerOverlay = !this.registerOverlay
    },
    sendLoginRequest() {
      axios({
        method: 'post',
        url: `${config.api.BASE_URL}/auth/login`,
        data: {
          email: this.form.email,
          password: this.form.password
        }
      }).then( (response) => {
        store.commit('setToken', response.data.token)
        this.toggleLoginOverlay()
        this.navigation.navigate('Tabs')
      }).catch( (err) => {
        this.error = 'Incorrect Field(s)'
      })
    },
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
        this.toggleSignupOverlay()
        this.navigation.navigate('Tabs')
      }).catch( (err) => {
        console.log(err)
      })
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

.inner {
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 250;
}

.buttons {
  width: 100%;
  background-color: transparent;
  flex: 1;
  flex-direction: row;
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

.error {
  margin-top: 50;
  text-align: center;
  color: #f00;
}

.btn {
  margin-left: 10;
  margin-right: 10;
}

.btn-login {
  background-color: #69553f;
}

.btn-signup {
  border-color: #69553f;
  color: #69553f;
}

.overlayform {
  padding: 50;
}
</style>