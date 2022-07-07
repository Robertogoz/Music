import React from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../../contexts/auth'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, ButtonText, MainTitle, StyledInput as Input } from '../../styles/styles'
import { Alert } from '../../../../components/alert'
import { useNavigation } from '@react-navigation/native'

type SignUpFormSubmit = {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('E-mail invalid').required('E-mail is required'),
  password: yup.string().min(6, 'Your password must have at least 6 digits').required('Password is required'),
  passwordConfirm: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords does not match'),
})

export function SignUpForm() {
  const { SignUp } = React.useContext(AuthContext)
  const [err, setErr] = React.useState<string>('')
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSubmit>({
    resolver: yupResolver(schema),
  })

  async function handleUserSignUp(data: SignUpFormSubmit) {
    try {
      const status = await SignUp(data.name, data.email, data.password)
      if (status) {
        navigation.goBack()
      }
    } catch (err: any) {
      setErr(err.message)
    }
  }

  return (
    <>
      <MainTitle>Create Account</MainTitle>

      <Alert text={err} />

      <Input
        name="name"
        control={control}
        placeholder={'John Doe'}
        placeholderTextColor="rgba(0,0,0,0.5)"
        returnKeyType="next"
        error={errors.name}
      />

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
        returnKeyType="next"
        error={errors.password}
      />
      <Input
        name="passwordConfirm"
        control={control}
        secureTextEntry
        placeholder={'******'}
        placeholderTextColor="rgba(0,0,0,0.5)"
        error={errors.passwordConfirm}
        onSubmitEditing={handleSubmit(handleUserSignUp)}
      />

      <Button activeOpacity={0.85} onPress={handleSubmit(handleUserSignUp)}>
        <ButtonText>Sign-Up</ButtonText>
      </Button>

      <Button activeOpacity={0.85} onPress={() => navigation.goBack()}>
        <ButtonText>Back to Sign-In</ButtonText>
      </Button>
    </>
  )
}
