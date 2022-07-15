import React, { useContext } from 'react'

import { useQuery } from 'react-query'
import { SpotifyContext } from '../../../../contexts/spotify'
import { Recommendations, Playlists } from '../../../../types/getRecommendationsType'
import {
  SearchRecommendationBox,
  PlaylistList,
  PlaylistImage,
  PlaylistTitle,
  RecommendationsTitle,
  PlaylistDescription,
  PlaylistData,
  StyledFlatList as FlatList,
} from './styles'

export function SearchRecommendations() {
  const { getRecommendations } = useContext(SpotifyContext)
  const { data } = useQuery<Recommendations>('recommendations', async () => await getRecommendations(), {
    staleTime: 1000 * 86400, // 1 day
  })

  const RenderItem = (item: any) => (
    <PlaylistList>
      <PlaylistImage source={{ uri: item?.item.images[0].url }} />
      <PlaylistData>
        <PlaylistTitle>{item?.item.name}</PlaylistTitle>
        <PlaylistDescription>{item?.item.description}</PlaylistDescription>
      </PlaylistData>
    </PlaylistList>
  )

  return (
    <SearchRecommendationBox>
      <RecommendationsTitle>{data?.message} - Today Recommendations</RecommendationsTitle>

      <FlatList data={data?.playlists.items} keyExtractor={(item) => item.id} renderItem={RenderItem} />
    </SearchRecommendationBox>
  )
}
