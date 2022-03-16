import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  ViewStyle,
  TextStyle,
  ColorValue,
} from 'react-native'
import {APP_DISABLE_GRAY, APP_GREEN, APP_WHITE} from 'styles/constant'
import {normalizeDimension} from 'utils/sizing'
import CustomText from './CustomText'
import Loader from './Loader'

type LoaderSize = 'large' | 'small'

interface ICustomButton {
  title: string
  onPress: (event: GestureResponderEvent) => void
  loading?: boolean
  disabled?: boolean
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  imageSource?: ImageSourcePropType
  imageStyle?: StyleProp<ImageStyle>
  loaderSize?: LoaderSize
  loaderColor?: ColorValue
}

const CustomButton = ({
  title,
  onPress,
  textStyle,
  containerStyle,
  loading,
  imageSource,
  imageStyle,
  disabled,
  loaderSize,
  loaderColor,
}: ICustomButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        disabled === true ? styles.disabled : styles.active,
        containerStyle,
      ]}>
      {loading ? (
        <Loader
          color={loaderColor ? loaderColor : APP_WHITE}
          size={loaderSize ?? 'small'}
        />
      ) : (
        <>
          {imageSource && (
            <Image
              source={imageSource}
              style={[styles.otherImg, imageStyle]}
              resizeMode='cover'
            />
          )}
        </>
      )}
      <CustomText text={title} otherStyles={[styles.text, textStyle]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    minHeight: 22,
    borderRadius: 12,
    alignSelf: 'center',
    width: '100%',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  disabled: {
    backgroundColor: APP_DISABLE_GRAY,
  },
  active: {
    backgroundColor: APP_GREEN,
  },
  otherImg: {
    width: 12,
    height: 8,
    marginHorizontal: 2,
  },
  text: {
    fontSize: normalizeDimension(18),
    color: APP_WHITE,
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
  },
})

export default CustomButton
