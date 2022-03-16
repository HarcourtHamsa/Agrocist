import React from 'react'
import {Modal, Pressable, StyleSheet} from 'react-native'
import CustomText from '../CustomText'
import {flex} from '../../styles/layout'
import {background} from '../../styles/background'
import {height, margin, padding, width} from '../../styles/spacing'
import {font} from '../../styles/typography'

const BottomSheet = ({modalState, setLaunchModal, title, children}: any) => {
  return (
    <Modal animationType={'slide'} transparent={true} visible={modalState}>
      <Pressable
        onPress={() => setLaunchModal(false)}
        style={[flex.flex_1, flex.justifyEnd, styles.background, margin.b_20]}>
        <Pressable
          onPress={() => {}}
          style={[background.white, height.min_150, width.full, styles.border]}>
          <CustomText
            otherStyles={[padding.b_20, padding.l_40, padding.t_20, font.bold]}
            text={title}
            left
          />
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
  border: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  background: {
    backgroundColor: '#1a1a1a73',
  },
})
