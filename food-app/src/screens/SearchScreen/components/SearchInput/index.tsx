import React, { useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { FlatList, Modal, Text, View } from 'react-native'
import { useQuery } from 'react-query'

import { SpotifyContext } from '../../../../contexts/spotify'
import { SearchType } from '../../../../types/searchTypes'
import { Input, ModalStyle, CenteredModal, ExitButton, TrackImage, TrackList, TrackName } from './styles'

export function SearchInput() {
  const [text, setText] = useState<string>('')
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const { Search } = useContext(SpotifyContext)
  const { data, refetch } = useQuery<SearchType>('search', async () => Search(text))

  const RenderItem = ({ item }: any) => (
    <TrackList>
      <TrackImage source={{ uri: item?.album.images[2].url }} />
      <TrackName>
        {item?.name} - {item?.album.artists[0].name}
      </TrackName>
    </TrackList>
  )

  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <Ionicons
          style={{ position: 'absolute', zIndex: 1, left: 10, bottom: 10 }}
          name="search"
          size={18}
          color="grey"
        />
        <Input
          placeholder="Search"
          placeholderTextColor={'rgba(0,0,0,0.5)'}
          onChangeText={(text) => setText(text)}
          onEndEditing={() => {
            refetch()
            setModalVisible(true)
          }}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // console.log(data)
          setModalVisible(!modalVisible)
        }}
      >
        <CenteredModal>
          <ModalStyle>
            <FlatList data={data?.tracks.items} keyExtractor={(item) => item.id} renderItem={RenderItem} />
            <ExitButton onPress={() => setModalVisible(!modalVisible)}>
              <Text>Back</Text>
            </ExitButton>
          </ModalStyle>
        </CenteredModal>
      </Modal>
    </>
  )
}

// onChangeText={(text) => setText(text)}
