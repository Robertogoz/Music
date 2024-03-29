import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '../../../contexts/auth'
import { useNavigation } from '@react-navigation/native'

import { TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Container, InputBlock, InputLabel, StyledInput as Input, CurrentPassword, Button, ButtonText } from './styles'
import { Alert } from '../../../components/alert'

type FormSubmit = {
  currentPassword: string
  newPassword: string
  newPasswordConfirm: string
}

const schema = yup.object({
  currentPassword: yup
    .string()
    .min(6, 'Your password must have at least 6 digits')
    .required('Current password is required'),
  newPassword: yup
    .string()
    .min(6, 'Your new password must have at least 6 digits')
    .required('New password is required'),
  newPasswordConfirm: yup
    .string()
    .oneOf([yup.ref('newPassword')], "Passwords doesn't match")
    .required('Confirm password is required'),
})

export function ChangePasswordScreen() {
  const { ChangePassword, user } = useContext(AuthContext)
  const [err, setErr] = React.useState<string>('')
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    //setFocus,
    formState: { errors },
  } = useForm<FormSubmit>({
    resolver: yupResolver(schema),
  })

  async function handleUserChangePassword(data: FormSubmit) {
    try {
      const response = await ChangePassword(user!._id, data.currentPassword, data.newPassword)
      response ? navigation.goBack() : console.log('no response')
    } catch (err: any) {
      setErr(err.message)
    }
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Container>
            <Alert text={err} />

            <InputBlock>
              <InputLabel>Current Password</InputLabel>
              <Input
                name="currentPassword"
                control={control}
                secureTextEntry
                placeholder={'******'}
                placeholderTextColor="rgba(0,0,0,0.5)"
                error={errors.currentPassword}
                returnKeyType="next"
                //onSubmitEditing={() => setFocus('newPassword')}
              />
              <CurrentPassword />
            </InputBlock>

            <InputBlock>
              <InputLabel>New Password</InputLabel>
              <Input
                name="newPassword"
                control={control}
                secureTextEntry
                placeholder={'******'}
                placeholderTextColor="rgba(0,0,0,0.5)"
                error={errors.newPassword}
                returnKeyType="next"
              />
            </InputBlock>

            <InputBlock>
              <InputLabel>New Password Confirm</InputLabel>
              <Input
                name="newPasswordConfirm"
                control={control}
                secureTextEntry
                placeholder={'******'}
                placeholderTextColor="rgba(0,0,0,0.5)"
                error={errors.newPasswordConfirm}
                onSubmitEditing={handleSubmit(handleUserChangePassword)}
              />
            </InputBlock>

            <Button activeOpacity={0.85} onPress={handleSubmit(handleUserChangePassword)}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
