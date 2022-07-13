import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MainRoutes } from './MainRoutes'
import { ChangePasswordScreen } from '../screens/AuthScreens/ChangePasswordScreen'
import { PlaylistDetails } from '../screens/PlaylistDetails'

export type RootStackAppRoutes = {
  Main: undefined
  ChangePassword: undefined
  PlaylistDetails: {
    id: string
  }
}

const Stack = createNativeStackNavigator<RootStackAppRoutes>()

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ title: 'Change Password' }} />
      <Stack.Screen name="PlaylistDetails" component={PlaylistDetails} options={{ title: 'Playlist Details' }} />
    </Stack.Navigator>
  )
}
