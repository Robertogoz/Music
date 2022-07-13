import React from 'react'
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { SignUpForm } from './components/SignUpForm'

import { Container } from '../styles/styles'

export function SignUpScreen() {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <SignUpForm />
        </Container>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
