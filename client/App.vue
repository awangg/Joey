<template>
  <app-navigator></app-navigator>
</template>

<script>
/**
 * React libraries 
 */
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

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
)

const BottomTabNavigator = createBottomTabNavigator(
  {
    Profile: ProfileScreen
  }
);

const StackNavigator = createStackNavigator(
  {
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
    initialRouteName: 'Auth'
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
}
</script>

<style>
</style>
