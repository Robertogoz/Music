import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import { AuthContext } from '../../../../contexts/auth'
import { PlaylistLabel, PlaylistView, PlaylistBlock, PlaylistImage } from './styles'
import { ListRenderItem } from 'react-native'

export type Playlist = {
  id: string
  name: string
  images: [
    {
      url: string
    }
  ]
}

type Playlists = {
  items: [Playlist]
}

export function PlaylistBar() {
  const { user } = useContext(AuthContext)

  const { data } = useQuery<Playlists>(
    'playlists',
    async () => {
      try {
        const res = await axios.get('https://api.spotify.com/v1/me/playlists?limit=10&offset=0', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user?.spotify_token,
          },
        })
        return res.data
      } catch (err) {
        console.log(err)
      }
    },
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
