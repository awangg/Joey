<template>
  <nb-container class="container">
    <nb-h1 class="title"> Login to Joey </nb-h1>
    <nb-form>
      <nb-item floatingLabel>
        <nb-label>Email</nb-label>
        <nb-input v-model="form.email" />
      </nb-item>
      <nb-item floatingLabel>
        <nb-label>Password</nb-label>
        <nb-input :secureTextEntry="true" v-model="form.password" />
      </nb-item>
    </nb-form>
    <nb-button block info class="button" :on-press="sendLoginRequest"><nb-text>Login</nb-text></nb-button>
    <nb-text class="error" v-if="error">{{error}}</nb-text>
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
        email: 'test@test.test',
        password: 'password2'
      },
      error: ''
    }
  },
  methods: {
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
        this.navigation.navigate('Tabs')
      }).catch( (err) => {
        this.error = 'Incorrect Field(s)'
      })
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  justify-content: center;
}

.title {
  text-align: center;
  margin-bottom: 50;
}

.button {
  margin-top: 50;
  margin-left: 100;
  margin-right: 100;
}

.error {
  margin-top: 50;
  text-align: center;
  color: #f00;
}
</style>