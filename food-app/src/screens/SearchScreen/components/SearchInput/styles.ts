import styled from 'styled-components/native'

export const Input = styled.TextInput`
  margin-top: 20px;
  border: 1px solid grey;
  padding: 10px 30px;
  border-radius: 20px;
  width: 320px;
  background-color: #ebebeb;
`

export const CenteredModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`

export const ModalStyle = styled.View`
  width: 90%;
  height: 70%;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
`

export const ExitButton = styled.TouchableOpacity`
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 20px;
`

export const TrackList = styled.View`
  width: 80%;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 0 10px;
`

export const TrackImage = styled.Image`
  width: 40px;
  height: 40px;
`

export const TrackName = styled.Text`
  font-size: 12px;
  align-self: center;
  padding-left: 10px;
`
