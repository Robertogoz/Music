import React from 'react'

import { PlaylistBar } from './components/PlaylistBar'
import { SearchNewReleases } from './components/SearchNewReleases'

import { Container } from './styles'

export function HomeScreen() {
  return (
    <Container>
      <PlaylistBar />
      <SearchNewReleases />
    </Container>
  )
}
