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
import CalendarScreen from './screens/Calendar';
import AnnouncementScreen from './screens/AnnouncementScreen';


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
        backgroundColor: '#a8cc78'
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
        title: 'Announcements',
        tabBarIcon: () => {
          return <Icon name="bullhorn" size={25} />;
        }
      }
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        title: 'Calendar',
        tabBarIcon: () => {
          return <Icon name="calendar" size={25} />;
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
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
        backgroundColor: '#a8cc78'
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
    Auth: {
      screen: AuthTabNavigator,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#1a471a'
        }
      }
    },
    Tabs: {
      screen: BottomTabNavigator,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#1a471a'
        },
      }
    },
  }, {
    initialRouteName: 'Loading'
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
}
</script>
