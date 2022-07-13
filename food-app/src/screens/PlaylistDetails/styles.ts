import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { Item } from '../../contexts/spotify'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlaylistImage = styled.Image`
  height: 180px;
  width: 180px;
  margin: 20px 0;
`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const TrackBlock = styled(FlatList as new (Props: FlatListProps<Item>) => FlatList<Item>)`
  height: 60%;
`

export const TrackList = styled.View`
  width: 80%;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 0 10px;
`

export const TrackImage = styled.Image`
  height: 50px;
  width: 50px;
`

export const TrackName = styled.Text`
  font-size: 16px;
  align-self: center;
  padding-left: 50px;
`
