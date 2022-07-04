import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignInScreen } from '../screens/AuthScreens/SignInScreen'

const Stack = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  )
}
