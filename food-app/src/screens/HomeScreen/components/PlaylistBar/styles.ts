import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { Playlist } from '../../../../types/PlaylistType'

export const PlaylistLabel = styled.Text`
  font-size: 12px;
  margin-right: 80%;
  margin-top: 10px;
`

export const PlaylistBlock = styled(FlatList as new (FlatListProps: any) => FlatList<Playlist>)`
  border: 1px solid black;
  padding: 2px;
  width: 101%;
`

export const PlaylistView = styled.TouchableOpacity`
  padding: 4px;
`

export const PlaylistImage = styled.Image`
  height: 60px;
  width: 60px;
`
