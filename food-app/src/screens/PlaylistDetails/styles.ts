import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { Item } from '../../types/PlaylistDataType'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlaylistImage = styled.Image`
  height: 180px;
  width: 180px;
  margin: 20px 0 5px;
`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
`

export const Description = styled.Text`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  text-align: center;
  width: 60%;
`

export const TrackBlock = styled(FlatList as new (Props: FlatListProps<Item>) => FlatList<Item>)`
  height: 50%;
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
