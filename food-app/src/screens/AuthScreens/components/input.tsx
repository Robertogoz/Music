import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { TextInput, TextInputProps } from 'react-native'

type Props = TextInputProps & {
  control: Control<any>
  name: string
  error?: FieldError
}

import { Error } from '../SignInScreen/style'

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
