import styled from 'styled-components/native'
import { Input } from '../../../components/input'

export const Container = styled.View`
  margin-top: 40px;
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const InputBlock = styled.View`
  width: 100%;
  align-items: center;
`

export const InputLabel = styled.Text`
  align-self: flex-start;
  font-size: 12px;
  margin-left: 20px;
`

export const StyledInput = styled(Input)`
  height: 40px;
  width: 90%;
  border-bottom-width: 1px;
  border-bottom-color: black;
  padding: 0 12px 0;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const CurrentPassword = styled.View`
  margin-bottom: 60px;
`

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  padding: 10px 20px;
  background-color: #2196f3;
  border-radius: 10px;
  justify-content: center;
  margin: 20px 0px;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  align-self: center;
`
