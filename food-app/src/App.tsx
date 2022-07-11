import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClientProvider } from 'react-query'

import { AuthProvider } from './contexts/auth'
import { queryClient } from './services/queryClient'
import { Routes } from './routes'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  )
}
