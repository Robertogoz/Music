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

  const RenderItem = ({ id, images }: Playlist) => (
    <PlaylistView
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('PlaylistDetails', {
          id,
        })
      }
    >
      <PlaylistImage source={{ uri: images[0].url }} />
    </PlaylistView>
  )

  return (
    <>
      <PlaylistLabel>Your Playlists</PlaylistLabel>
      <PlaylistBlock
        horizontal={true}
        data={data?.items}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <RenderItem id={item.item.id} images={item.item.images} />}
      />
    </>
  )
}
