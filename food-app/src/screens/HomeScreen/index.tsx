import React from 'react'
import { AuthContext } from '../../contexts/auth'

import { Text } from 'react-native'
import { Container, Button, ButtonText } from './styles'

export function HomeScreen() {
  const { SignOut } = React.useContext(AuthContext)

  return (
    <Container>
      <Text>Home</Text>
      <Button onPress={SignOut}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </Container>
  )
}
