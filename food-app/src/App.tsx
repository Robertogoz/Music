import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './contexts/auth'

import { Routes } from './routes'

export function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  )
}
