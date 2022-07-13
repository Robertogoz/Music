import React from 'react'
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { SignInForm } from './components/SignInForm'

import { Container } from '../styles/styles'

export function SignInScreen() {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <SignInForm />
        </Container>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
