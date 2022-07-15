import React, { useContext } from 'react'
import { useQuery } from 'react-query'

import { NewReleases } from '../../../../types/getNewReleasesType'
import { SpotifyContext } from '../../../../contexts/spotify'
import { Title, SearchNewReleasesContainer, NewReleasesImage, NewReleasesList, NewReleasesTitle } from './styles'
import { FlatList, Platform } from 'react-native'

export function SearchNewReleases() {
  const { getNewReleases } = useContext(SpotifyContext)
  const { data } = useQuery<NewReleases>('newReleases', async () => await getNewReleases(), {
    staleTime: 1000 * 86400, // 1 day
  })

  const RenderItem = (item: any) => (
    <NewReleasesList>
      <NewReleasesImage source={{ uri: item.item.images[0].url }} />
      <NewReleasesTitle>
        {item?.item.name} - {item?.item.artists[0].name}
      </NewReleasesTitle>
    </NewReleasesList>
  )

  return (
    <SearchNewReleasesContainer>
      <Title>New Releases</Title>

      {Platform.OS === 'android' ? (
        <FlatList
          style={{ maxHeight: 400 }}
          data={data?.albums.items}
          keyExtractor={(item) => item.id}
          renderItem={RenderItem}
        />
      ) : (
        <FlatList
          style={{ maxHeight: 550 }}
          data={data?.albums.items}
          keyExtractor={(item) => item.id}
          renderItem={RenderItem}
        />
      )}
    </SearchNewReleasesContainer>
  )
}
