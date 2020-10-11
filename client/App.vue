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
import * as Font from 'expo-font';

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
import CalendarScreen from './screens/CalendarScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';
import DuncTankScreen from './screens/DuncTank';
import DunkTimeScreen from './screens/DunkTime';
import ResourceScreen from './screens/ResourceScreen';

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
    initialRouteName: 'Login',
    backBehavior: 'none',
    tabBarOptions: {
      style: {
        paddingTop: 8,
        backgroundColor: '#white'
      },
      labelStyle: { fontSize: 16 },
      labelPosition: 'beside-icon',
      inactiveTintColor: '#000'
    }
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Announcements: {
      screen: AnnouncementScreen,
      navigationOptions: {
        title: '',
        tabBarIcon: () => {
          return <Icon name="bullhorn" size={25} />;
        }
      }
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        title: '',
        tabBarIcon: () => {
          return <Icon name="calendar" size={25} />;
        }
      }
    },
    DuncTank: {
      screen: DuncTankScreen,
      navigationOptions: {
        title: '',
        tabBarIcon: () => {
          return <Icon name="birthday-cake" size={25} />
        }
      }
    },
    Resources: {
      screen: ResourceScreen,
      navigationOptions: {
        title: '',
        tabBarIcon: () => {
          return <Icon name="question-circle" size={25} />;
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: '',
        tabBarIcon: () => {
          return <Icon name="user" size={25} />;
        }
      }
    }
  }, {
    initialRouteName: 'Profile',
    backBehavior: 'none',
    tabBarOptions: {
      style: {
        paddingTop: 8,
        backgroundColor: 'white'
      },
      inactiveTintColor: '#000'
    }
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
    Tabs: {
      screen: BottomTabNavigator,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'white'
        },
      }
    },
    DunkTime: {
      screen: DunkTimeScreen
    }
  }, {
    initialRouteName: 'Loading'
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
  created() {
    this.loadFonts()
  },
  methods: {
    async loadFonts() {
      await Font.loadAsync({
        Holtwood: require('./assets/fonts/HoltwoodOneSC-Regular.ttf')
      })
    }
  }
}
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
