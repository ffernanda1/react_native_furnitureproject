import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTapNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Profile } from '../screens';
import { Ionicons } from '@expo/vector-icons'

const Tap = createBottomTapNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70
  }
}

const BottomTapNavigation = () => {
  return (
    <Tap.Navigation>
      <Tap.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused } ) => {
          return <Ionicons />
        }
      }}
      />
      <Tap.Screen name="Search" component={Search} />
      <Tap.Screen name="Profile" component={Profile} />
    </Tap.Navigation>
  )
}

export default BottomTapNavigation