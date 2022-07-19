import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { Platform } from 'react-native'

import { useQuery } from 'react-query'
import { SpotifyContext } from '../../../../contexts/spotify'
import { Recommendations } from '../../../../types/getRecommendationsType'
import {
  SearchRecommendationBox,
  PlaylistList,
  PlaylistImage,
  PlaylistTitle,
  PlaylistButton,
  RecommendationsTitle,
  PlaylistDescription,
  PlaylistData,
  Flat,
} from './styles'

export function SearchRecommendations() {
  const navigation = useNavigation()
  const { getRecommendations } = useContext(SpotifyContext)
  const { data } = useQuery<Recommendations>('recommendations', async () => await getRecommendations(), {
    staleTime: 1000 * 86400, // 1 day
  })

  const RenderItem = (item: any) => (
    <PlaylistList>
      <PlaylistButton
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate('PlaylistDetails', {
            id: item?.item.id,
          })
        }
      >
        <PlaylistImage source={{ uri: item?.item.images[0].url }} />
        <PlaylistData>
          <PlaylistTitle>{item?.item.name}</PlaylistTitle>
          <PlaylistDescription>{item?.item.description}</PlaylistDescription>
        </PlaylistData>
      </PlaylistButton>
    </PlaylistList>
  )

  return (
    <SearchRecommendationBox>
      <RecommendationsTitle>{data?.message} - Today Recommendations</RecommendationsTitle>

      {Platform.OS === 'android' ? (
        <Flat data={data?.playlists.items} keyExtractor={(item) => item.id} renderItem={RenderItem} />
      ) : (
        <Flat
          style={{ maxHeight: 620 }}
          data={data?.playlists.items}
          keyExtractor={(item) => item.id}
          renderItem={RenderItem}
        />
      )}
    </SearchRecommendationBox>
  )
}
