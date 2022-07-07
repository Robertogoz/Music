import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SignUpForm } from './components/SignUpForm'

import { Container } from '../styles/styles'

export function SignUpScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <SignUpForm />
      </Container>
    </TouchableWithoutFeedback>
  )
}
