import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { HomeScreen } from '../screens/HomeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { SearchScreen } from '../screens/SearchScreen'

const Tab = createBottomTabNavigator()

export function MainRoutes() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Ionicons name="home-outline" size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <Ionicons name="search-outline" size={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Ionicons name="person-outline" size={24} />,
        }}
      />
    </Tab.Navigator>
  )
}
