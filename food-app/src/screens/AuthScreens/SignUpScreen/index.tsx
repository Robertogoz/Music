import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SignUpForm } from './components/SignUpForm'

import { Container } from '../SignInScreen/style'

export function SignUpScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <SignUpForm />
      </Container>
    </TouchableWithoutFeedback>
  )
}
