import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SignInForm } from './components/SignInForm'

import { Container } from './styles'

export function SignInScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <SignInForm />
      </Container>
    </TouchableWithoutFeedback>
  )
}
