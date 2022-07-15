import React from 'react'

import { SearchInput } from './components/SearchInput'
import { SearchRecommendations } from './components/SearchRecommendations'
import { Container } from './styles'

export function SearchScreen() {
  return (
    <Container>
      <SearchInput />
      <SearchRecommendations />
    </Container>
  )
}
