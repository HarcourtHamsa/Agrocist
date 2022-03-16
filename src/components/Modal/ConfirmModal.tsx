import CustomButton from 'components/CustomButton'
import CustomText from 'components/CustomText'
import Divider from 'components/Divider'
import Loader from 'components/Loader'
import React from 'react'
import {StyleProp, StyleSheet, TextStyle} from 'react-native'
import {APP_WHITE, APP_BG_BLUE} from 'styles/constant'
import {flex} from 'styles/layout'
import {margin} from 'styles/spacing'
import {font} from 'styles/typography'
import {normalizeDimension} from 'utils/sizing'
import ModalLayout from './ModalLayout'

interface IConfirmModal {
  openModal: any
  title: string
  description: string
  okayText: string
  cancelText: string
  onConfirm: () => void
  onCancel: () => void
  cancelOutline?: boolean
  descriptionStyle?: StyleProp<TextStyle>
  loading: boolean
}

const ConfirmModal = ({
  openModal,
  title,
  description,
  okayText,
  onConfirm,
  onCancel,
  cancelText,
  cancelOutline,
  descriptionStyle,
  loading,
}: IConfirmModal) => {
  return (
    <ModalLayout modalState={openModal.value} handleCloseModal={onCancel}>
      <CustomText otherStyles={margin.b_10} text={title} strong={'bold'} />
      <Divider />
      <CustomText
        otherStyles={[
          margin.t_20,
          margin.b_30,
          flex.selfCenter,
          styles.question,
          descriptionStyle,
        ]}
        text={description}
      />
      {loading ? (
        <Loader centralize size={'small'} />
      ) : (
        <>
          <CustomButton
            containerStyle={styles.modal_button}
            title={okayText}
            onPress={onConfirm}
          />
          <CustomButton
            containerStyle={[
              styles.modal_button,
              cancelOutline && styles.outline,
            ]}
            textStyle={cancelOutline && [styles.outlineText]}
            title={cancelText}
            onPress={onCancel}
          />
        </>
      )}
    </ModalLayout>
  )
}

export default ConfirmModal
const styles = StyleSheet.create({
  modal_button: {
    height: 39,
    alignSelf: 'center',
    borderRadius: 23,
    marginBottom: 10,
    width: 250,
  },
  question: {
    width: normalizeDimension(170),
  },
  modal_description: {
    marginVertical: 20,
  },
  outline: {
    backgroundColor: APP_WHITE,
    borderWidth: 1,
    borderColor: APP_BG_BLUE,
  },
  outlineText: {
    color: APP_BG_BLUE,
    fontFamily: font.regular.fontFamily,
  },
})
