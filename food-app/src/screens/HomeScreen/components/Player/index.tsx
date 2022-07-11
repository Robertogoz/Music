import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Ionicons } from '@expo/vector-icons'

import { AuthContext } from '../../../../contexts/auth'
import { MusicName, PlayerBlock, PlayerButtons, Button, AlbumImage } from './styles'

export function Player() {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

  const { user } = React.useContext(AuthContext)

  const { data } = useQuery(
    'player',
    async () => {
      try {
        const res = await axios.get('https://api.spotify.com/v1/me/player?market=BR', {
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
    { staleTime: 1000 * 20 } // 20 seconds
  )

  React.useEffect(() => {
    if (data?.is_playing) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }, [data?.is_playing])

  return (
    <PlayerBlock>
      <AlbumImage source={{ uri: data?.item.album.images[0].url }} resizeMode="contain" />
      <MusicName>
        {data?.item.name} - {data.item.artists[0].name}
      </MusicName>
      <PlayerButtons>
        <Button activeOpacity={0.5}>
          <Ionicons name="play-back" size={36} color="rgba(255,255,255,0.7)" />
        </Button>

        {isPlaying ? (
          <Button activeOpacity={0.5} onPress={() => setIsPlaying(!isPlaying)}>
            <Ionicons name="pause" size={36} color="rgba(255,255,255,0.7)" />
          </Button>
        ) : (
          <Button activeOpacity={0.5} onPress={() => setIsPlaying(!isPlaying)}>
            <Ionicons name="play" size={36} color="rgba(255,255,255,0.7)" />
          </Button>
        )}

        <Button activeOpacity={0.5}>
          <Ionicons name="play-forward" size={36} color="rgba(255,255,255,0.7)" />
        </Button>
      </PlayerButtons>
    </PlayerBlock>
  )
}
