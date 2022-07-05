import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MainRoutes } from './MainRoutes'

const Stack = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainRoutes} />
    </Stack.Navigator>
  )
}
