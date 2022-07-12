import React, { useContext } from 'react'
import { useQuery } from 'react-query'

import { SpotifyContext, Playlist, Playlists } from '../../../../contexts/spotify'
import { PlaylistLabel, PlaylistView, PlaylistBlock, PlaylistImage } from './styles'
import { ListRenderItem } from 'react-native'

export function PlaylistBar() {
  const { getAllPlaylists } = useContext(SpotifyContext)

  const { data } = useQuery<Playlists>(
    'playlists',
    getAllPlaylists,
    { staleTime: 1000 * 60 } // 1 minute
  )

  const RenderItem: ListRenderItem<Playlist> = ({ item }) => (
    <PlaylistView>
      <PlaylistImage source={{ uri: item?.images[0].url }} />
    </PlaylistView>
  )

  return (
    <>
      <PlaylistLabel>Your Playlists</PlaylistLabel>
      <PlaylistBlock
        horizontal={true}
        data={data?.items}
        keyExtractor={(item: Playlist) => item.id}
        renderItem={RenderItem}
      />
    </>
  )
}
