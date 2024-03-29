import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { Item } from '../../../../types/getRecommendationsType'

export const SearchRecommendationBox = styled.View`
  margin-top: 15px;
  align-items: center;
`

export const RecommendationsTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  padding: 0 5px;
`

export const Flat = styled(FlatList as new (Props: FlatListProps<Item>) => FlatList<Item>)`
  margin-top: 10px;
  max-height: 450px;
`

export const PlaylistList = styled.View`
  width: 95%;
  flex-direction: row;
  margin: 5px 0;
  padding: 0 10px;
`

export const PlaylistButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
`

export const PlaylistImage = styled.Image`
  width: 55px;
  height: 55px;
`

export const PlaylistData = styled.View`
  align-self: center;
  padding-left: 10px;
`

export const PlaylistTitle = styled.Text`
  font-size: 16px;
`

export const PlaylistDescription = styled.Text`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.7);
  width: 80%;
`
