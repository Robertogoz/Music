import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 999px;
`

export const IconDiv = styled.TouchableOpacity`
  width: 122px;
  height: 122px;
  margin: 10px 0;
  border: black 1px solid;
  border-radius: 999px;
  align-self: center;
`

export const TextM = styled.Text`
  font-size: 18px;
  align-self: center;
`

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  padding: 10px 20px;
  justify-content: center;

  border-bottom-width: 0.3px;
  border-bottom-color: black;
`

export const Header = styled.View`
  margin-bottom: 50px;
`
