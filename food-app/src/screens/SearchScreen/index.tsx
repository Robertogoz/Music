import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

import { Container } from './styles'
import { SearchInput } from './components/SearchInput'

export function SearchScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <SearchInput />
      </Container>
    </TouchableWithoutFeedback>
  )
}
