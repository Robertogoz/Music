import React from 'react'

import { Container, MainTitle } from './styles'
import { PlaylistBar } from './components/PlaylistBar'

export function HomeScreen() {
  return (
    <Container>
      <MainTitle>Home</MainTitle>
      <PlaylistBar />
    </Container>
  )
}
