import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Form } from '../../../components/form'

import { Container } from './style'

export function AuthScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Form />
      </Container>
    </TouchableWithoutFeedback>
  )
}
