import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignInScreen } from '../screens/AuthScreens/SignInScreen'
import { SignUpScreen } from '../screens/AuthScreens/SignUpScreen'

export type RootStackAuthRoutes = {
  SignIn: undefined
  SignUp: undefined
}

const Stack = createNativeStackNavigator<RootStackAuthRoutes>()

export function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}
