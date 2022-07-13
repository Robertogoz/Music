import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClientProvider } from 'react-query'
import { StatusBar } from 'expo-status-bar'

import { AuthProvider } from './contexts/auth'
import { SpotifyProvider } from './contexts/spotify'
import { queryClient } from './services/queryClient'
import { Routes } from './routes'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SpotifyProvider>
          <NavigationContainer>
            <Routes />
            <StatusBar style="dark" />
          </NavigationContainer>
        </SpotifyProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
