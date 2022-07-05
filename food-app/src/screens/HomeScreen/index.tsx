import React from 'react'
import { AuthContext } from '../../contexts/auth'

import { Container, Button, ButtonText, MainTitle } from './styles'

export function HomeScreen() {
  const { SignOut } = React.useContext(AuthContext)

  return (
    <Container>
      <MainTitle>Home</MainTitle>
      <Button onPress={SignOut}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </Container>
  )
}
