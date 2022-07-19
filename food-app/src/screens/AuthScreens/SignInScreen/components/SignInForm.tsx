import React from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../../contexts/auth'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { SpotifyButton } from './SpotifyButton'

import { Button, ButtonText, MainTitle, StyledInput as Input } from '../../styles/styles'
import { Alert } from '../../../../components/alert'

type SignInFormSubmit = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email('Invalid e-mail').required('E-mail is required'),
  password: yup.string().min(6, 'Password must have at least 6 digits').required('Password is required'),
})

export function SignInForm() {
  const { SignIn } = React.useContext(AuthContext)
  const navigation = useNavigation()
  const [err, setErr] = React.useState<string>('')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSubmit>({
    resolver: yupResolver(schema),
  })

  async function handleUserSignIn(data: SignInFormSubmit) {
    try {
      await SignIn(data.email, data.password)
    } catch (err: any) {
      setErr(err.message)
    }
  }

  return (
    <>
      <MainTitle>Music App</MainTitle>

      <Alert text={err}></Alert>

      <Input
        name="email"
        control={control}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder={'E-mail'}
        placeholderTextColor="rgba(0,0,0,0.5)"
        returnKeyType="next"
        error={errors.email}
      />

      <Input
        name="password"
        control={control}
        secureTextEntry
        placeholder={'******'}
        placeholderTextColor="rgba(0,0,0,0.5)"
        error={errors.password}
        onSubmitEditing={handleSubmit(handleUserSignIn)}
      />

      <Button activeOpacity={0.85} onPress={handleSubmit(handleUserSignIn)}>
        <ButtonText>Sign-In</ButtonText>
      </Button>

      <Button activeOpacity={0.85} onPress={() => navigation.navigate('SignUp')}>
        <ButtonText>Sign-Up</ButtonText>
      </Button>

      <SpotifyButton />
    </>
  )
}
