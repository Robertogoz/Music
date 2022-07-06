import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Alert } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import { RootStackAppRoutes } from '../../routes/AppRoutes'

import { Icon, TextM, IconDiv, Button, Header, Container } from './styles'

type ProfileScreenProps = NativeStackNavigationProp<RootStackAppRoutes, 'Main'>

export function ProfileScreen() {
  const { user, SignOut } = React.useContext(AuthContext)
  const navigation = useNavigation<ProfileScreenProps>()

  //TODO - A avatar management system
  function handleAvatar() {
    Alert.alert('Avatar Management', 'What do you want to do?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Remove avatar',
        style: 'default',
      },
      {
        text: 'Add/change avatar',
        style: 'default',
      },
    ])
  }

  return (
    <Container>
      <Header>
        <IconDiv activeOpacity={0.65} onPress={handleAvatar}>
          {user?.avatar === undefined && <Icon source={require('../../assets/default_icon.png')} />}
          <Icon source={{ uri: user?.avatar }} />
        </IconDiv>

        <TextM>{user?.name}</TextM>
        <TextM>Email: {user?.email}</TextM>
      </Header>

      <Button onPress={() => navigation.navigate('ChangePassword')} activeOpacity={0.85}>
        <TextM>Change Password</TextM>
      </Button>
      <Button onPress={SignOut} activeOpacity={0.85}>
        <TextM>Sign Out</TextM>
      </Button>
    </Container>
  )
}