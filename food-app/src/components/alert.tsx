import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const ErrorText = styled.Text`
  color: #dc1637;
  margin: 3px 0 3px;
`

const ErrorDiv = styled.View`
  height: 50px;
  width: 80%;
  background-color: rgba(255, 0, 0, 0.2);
  border: gray solid 0.5px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

type AlertProps = {
  text: string
}

export function Alert(props: AlertProps) {
  const { text } = props
  if (text !== '') {
    return (
      <ErrorDiv>
        <ErrorText>{text}</ErrorText>
      </ErrorDiv>
    )
  } else {
    return <View></View>
  }
}
