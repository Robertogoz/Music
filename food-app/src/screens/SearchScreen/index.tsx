import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

import { SearchInput } from './components/SearchInput'
import { SearchRecommendations } from './components/SearchRecommendations'
import { Container } from './styles'

export function SearchScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <SearchInput />
        <SearchRecommendations />
      </Container>
    </TouchableWithoutFeedback>
  )
}
