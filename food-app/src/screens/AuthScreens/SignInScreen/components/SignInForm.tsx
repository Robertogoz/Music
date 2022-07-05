import React from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../../contexts/auth'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RootStackAuthRoutes } from '../../../../routes/AuthRoutes'

import { Button, ButtonText, MainTitle, StyledInput as Input } from '../style'
import { useNavigation } from '@react-navigation/native'
import { Alert } from '../../../../components/alert'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type SignInScreenProps = NativeStackNavigationProp<RootStackAuthRoutes, 'SignIn'>

type SignInFormSubmit = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe seu e-mail'),
  password: yup.string().min(6, 'A senha deve ter ao menos 6 dígitos').required('Informe sua senha'),
})

export function SignInForm() {
  const { SignIn } = React.useContext(AuthContext)
  const navigation = useNavigation<SignInScreenProps>()
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
        <ButtonText>Sign-in</ButtonText>
      </Button>

      <Button activeOpacity={0.85} onPress={() => navigation.navigate('SignUp')}>
        <ButtonText>Sign-Up</ButtonText>
      </Button>
    </>
  )
}
