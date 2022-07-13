import styled from 'styled-components/native'
import { Input } from '../../../components/input'

export const Container = styled.View`
  margin-top: 40%;
  align-items: center;
  justify-content: center;
`

export const MainTitle = styled.Text`
  font-size: 48px;
  margin-bottom: 90px;
`

export const StyledInput = styled(Input)`
  height: 40px;
  width: 90%;
  border-bottom-width: 1px;
  border-bottom-color: black;
  padding: 0 12px 0;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  padding: 10px 20px;
  background-color: #2196f3;
  border-radius: 70px;
  justify-content: center;
  margin: 10px 200px 0px;
`
export const ButtonText = styled.Text`
  color: white;
  align-self: center;
  font-size: 15px;
`
