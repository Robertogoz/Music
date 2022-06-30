import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, ButtonText, MainTitle, StyledInput as Input } from '../SignInScreen/style'

type SignInFormSubmit = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe seu e-mail'),
  password: yup.string().min(6, 'A senha deve ter ao menos 6 dígitos').required('Informe sua senha'),
})

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSubmit>({
    resolver: yupResolver(schema),
  })

  function handleUserSignIn(data: SignInFormSubmit) {
    console.log(data)
  }

  return (
    <>
      <MainTitle>Music App</MainTitle>

      <Input
        name="email"
        control={control}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder={'E-mail'}
        placeholderTextColor="#000"
        error={errors.email}
      />

      <Input
        name="password"
        control={control}
        secureTextEntry
        placeholder={'******'}
        placeholderTextColor="#000"
        error={errors.password}
      />

      <Button activeOpacity={0.85} onPress={handleSubmit(handleUserSignIn)}>
        <ButtonText>Sign-in</ButtonText>
      </Button>

      <Button activeOpacity={0.85} onPress={() => console.log('Criar conta')}>
        <ButtonText>Criar Conta</ButtonText>
      </Button>
    </>
  )
}
