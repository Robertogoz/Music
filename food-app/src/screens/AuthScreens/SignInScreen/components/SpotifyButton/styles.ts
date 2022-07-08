import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  background-color: #1db954;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 70px;
  padding: 0 30px;
  width: 90%;
  height: 56px;
  margin-top: 10px;
`

export const SpotifyIcon = styled.Image`
  height: 25px;
  width: 25px;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`
