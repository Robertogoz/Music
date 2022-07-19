import React, { useContext } from 'react'
import { useQuery } from 'react-query'

import { SpotifyContext } from '../../../../contexts/spotify'
import { PlaylistLabel, PlaylistView, PlaylistBlock, PlaylistImage } from './styles'
import { ListRenderItem } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Playlist, Playlists } from '../../../../types/PlaylistType'

export function PlaylistBar() {
  const navigation = useNavigation()
  const { getAllPlaylists } = useContext(SpotifyContext)

  const { data } = useQuery<Playlists>(
    'playlists',
    getAllPlaylists,
    { staleTime: 1000 * 60 } // 1 minute
  )

  const RenderItem: ListRenderItem<Playlist> = ({ item }) => (
    <PlaylistView
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('PlaylistDetails', {
          id: item?.id,
        })
      }
    >
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
