import styled from 'styled-components/native'

export const PlayerBlock = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 70%;
  height: 290px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.88);
`

export const PlayerButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin-top: 10px;
`

export const MusicName = styled.Text`
  margin-top: 5px;
  padding: 0px 5px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`

export const AlbumImage = styled.Image`
  margin-top: 5px;
  height: 60%;
  width: 60%;
  border-radius: 10px;
`

export const Button = styled.TouchableOpacity`
  margin: 0 5px 10px;
`
