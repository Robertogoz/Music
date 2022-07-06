import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { TextInput, TextInputProps } from 'react-native'

type Props = TextInputProps & {
  control: Control<any>
  name: string
  error?: FieldError
}

import styled from 'styled-components/native'

export const Error = styled.Text`
  color: #dc1637;
  margin: 3px 0 6px;
`

export function Input({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => <TextInput onChangeText={onChange} value={value} {...rest} />}
      />

      {error && <Error>{error.message}</Error>}
    </>
  )
}
