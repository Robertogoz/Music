import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { Playlist } from './index'

export const PlaylistLabel = styled.Text`
  font-size: 12px;
  margin-right: 200px;
`

export const PlaylistBlock = styled(FlatList as new () => FlatList<Playlist>)`
  border: 1px solid black;
  padding: 2px;
  width: 280px;
`

export const PlaylistView = styled.View`
  padding: 4px;
`

export const PlaylistImage = styled.Image`
  height: 60px;
  width: 60px;
`
