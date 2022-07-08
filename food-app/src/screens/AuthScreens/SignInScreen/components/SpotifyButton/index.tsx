import * as React from 'react'
import { ResponseType, useAuthRequest } from 'expo-auth-session'
import { Button, ButtonText, SpotifyIcon } from './styles'
import { AuthContext } from '../../../../../contexts/auth'
import axios from 'axios'
import { View } from 'react-native'

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
}

export function SpotifyButton() {
  const { setUser } = React.useContext(AuthContext)
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '6794d7c284514bd1a00fdc3cefee55fc',
      scopes: [
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-state',
        'user-top-read',
        'user-modify-playback-state',
        'streaming',
        'user-read-email',
        'user-read-private',
      ],
      usePKCE: false,
      redirectUri: 'exp://localhost:19000',
    },
    discovery
  )

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params

      axios
        .get('https://api.spotify.com/v1/me', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + access_token,
          },
        })
        .then((res) => {
          const spotifyUser = {
            _id: res.data.id,
            name: res.data.display_name,
            email: res.data.email,
            avatar: res.data.images.url,
            spotify_token: access_token,
          }

          setUser(spotifyUser)
        })
        .catch((err) => console.log(err.response.data))
    }
  }, [response])

  return (
    <Button
      activeOpacity={0.85}
      disabled={!request}
      onPress={() => {
        promptAsync()
      }}
    >
      <SpotifyIcon
        style={{ height: 25, width: 25 }}
        source={require('../../../../../assets/Spotify_Icon.png')}
        resizeMode="contain"
      />
      <ButtonText>LOG IN WITH SPOTIFY</ButtonText>
      <View></View>
    </Button>
  )
}
