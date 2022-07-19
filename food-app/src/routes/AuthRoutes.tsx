import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignInScreen } from '../screens/AuthScreens/SignInScreen'
import { SignUpScreen } from '../screens/AuthScreens/SignUpScreen'

const Stack = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}
