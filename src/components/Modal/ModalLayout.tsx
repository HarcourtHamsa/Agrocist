import React from 'react'
import {Modal, StyleSheet, ScrollView, Pressable, Image} from 'react-native'
import {APP_WHITE} from 'styles/constant'
import {width} from 'styles/spacing'
import {close_white} from 'utils/images/list'

interface IModalLayout {
  modalState: boolean
  handleCloseModal: () => void
  children: any
}

const ModalLayout = ({
  modalState,
  children,
  handleCloseModal,
}: IModalLayout) => {
  return (
    <Modal animationType={'slide'} transparent={true} visible={modalState}>
      <Pressable style={styles.outerContainer} onPress={handleCloseModal}>
        <Image source={close_white} style={styles.closeImage} />
        <Pressable style={styles.innerContainer} onPress={() => {}}>
          <ScrollView style={width.full} showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export default ModalLayout

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#0000004D',
    paddingTop: '20%',
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: APP_WHITE,
    borderRadius: 10,
    paddingVertical: 30,
    width: '100%',
    alignItems: 'center',
    elevation: 10,
    maxWidth: 400,
  },
  button: {
    marginTop: 15,
    borderColor: '#B5BBC9',
  },
  closeImage: {
    width: 12,
    height: 12,
    position: 'absolute',
    top: 25,
    left: 15,
  },
})
