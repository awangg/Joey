<template>
  <app-navigator></app-navigator>
</template>

<script>
/**
 * React/Vue libraries 
 */
import * as React from 'react';
import Vue from "vue-native-core";
import Vuex from 'vuex';
import Icon from 'react-native-vector-icons/FontAwesome';
import { VueNativeBase } from "native-base";

/**
 * Navigation libraries
 */
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'vue-native-router';

/**
 * Import screens
 */
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';

Vue.use(VueNativeBase);

const AuthTabNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        tabBarIcon: () => {
          return <Icon name="sign-in" size={25} />;
        }
      }
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        title: 'Signup',
        tabBarIcon: () => {
          return <Icon name="edit" size={25} />;
        }
      }
    }
  }, {
    initialRouteName: 'Login'
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Profile: ProfileScreen
  }
);

const StackNavigator = createStackNavigator(
  {
    Loading: {
      screen: LoadingScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Auth: {
      screen: AuthTabNavigator,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#000'
        }
      }
    },
    Tabs: {
      screen: BottomTabNavigator,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#000'
        }
      }
    },
  }, {
    initialRouteName: 'Tabs'
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
}
</script>

<style>
</style>
