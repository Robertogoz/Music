import React from 'react'

import { PlaylistBar } from './components/PlaylistBar'
import { Player } from './components/Player'

import { Container, MainTitle } from './styles'

export function HomeScreen() {
  return (
    <Container>
      <MainTitle>Home</MainTitle>
      <PlaylistBar />
      <Player />
    </Container>
  )
}
