import React from 'react'
import { Platform } from 'react-native'

import { useQuery } from 'react-query'
import { SpotifyContext } from '../../contexts/spotify'

import { Container, Title, PlaylistImage, TrackList, TrackImage, TrackName, TrackBlock } from './styles'

type PlaylistDetailsProps = {
  route: {
    params: {
      id: string
    }
  }
}

export function PlaylistDetails({ route }: PlaylistDetailsProps) {
  const { id } = route.params
  const { getPlaylistData } = React.useContext(SpotifyContext)

  const { data } = useQuery('playlistData', async () => await getPlaylistData(id), { refetchOnWindowFocus: true }) // 1 minute

  const Playlist = {
    playlistImage: data?.images[0].url,
    playlistName: data?.name,
    tracks: data?.tracks,
  }

  const RenderItem = ({ item }: any) => (
    <TrackList>
      <TrackImage source={{ uri: item?.track.album.images[0].url }} />
      <TrackName>
        {item?.track.name} - {item?.track.album.artists[0].name}
      </TrackName>
    </TrackList>
  )

  return (
    <Container>
      <PlaylistImage source={{ uri: Playlist.playlistImage }} />
      <Title>{Playlist.playlistName}</Title>

      {Platform.OS === 'android' ? (
        <TrackBlock data={data?.tracks.items} keyExtractor={(item) => item.track.id} renderItem={RenderItem} />
      ) : (
        <TrackBlock
          style={{ height: 420 }}
          data={data?.tracks.items}
          keyExtractor={(item) => item.track.id}
          renderItem={RenderItem}
        />
      )}
    </Container>
  )
}
