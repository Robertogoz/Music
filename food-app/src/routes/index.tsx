import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth'

import { AppRoutes } from './AppRoutes'
import { AuthRoutes } from './AuthRoutes'

export function Routes() {
  const { signed } = useContext(AuthContext)

  return signed ? <AppRoutes /> : <AuthRoutes />
}
