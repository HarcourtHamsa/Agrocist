import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import {flex} from '../styles/layout'

interface ITransparentButton {
  descriptionText?: string
  pressableText: string
  onPress: () => void
  containerStyle?: StyleProp<ViewStyle>
  pressableTextStyle?: StyleProp<TextStyle>
}

const TransparentButton = ({
  descriptionText,
  pressableText,
  onPress,
  containerStyle,
  pressableTextStyle,
}: ITransparentButton) => {
  return (
    <View style={[flex.row, containerStyle]}>
      <CustomText text={descriptionText ?? ''} />
      <Pressable onPress={onPress}>
        <CustomText otherStyles={[pressableTextStyle]} text={pressableText} />
      </Pressable>
    </View>
  )
}

export default TransparentButton

const styles = StyleSheet.create({})
