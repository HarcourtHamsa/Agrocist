import React from 'react'
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native'
import {APP_TEXT_BLACK} from 'styles/constant'
import {font} from 'styles/typography'
import {normalizeDimension} from 'utils/sizing'

type StatusTypes = 'title' | 'subTitle' | 'error' | undefined

interface ICustomText {
  type?: StatusTypes
  text: string
  left?: boolean
  otherStyles?: StyleProp<TextStyle>
  strong?: 'bold' | 'medium' | 'regular' | undefined
}

const CustomText = ({type, text, otherStyles, left, strong}: ICustomText) => {
  return (
    <Text
      style={[
        type === 'title'
          ? [styles.title, styles.bold]
          : type === 'error'
          ? [styles.error]
          : [styles.subTitle],
        {textAlign: left ? 'left' : 'center'},
        strong && styles[strong],
        otherStyles,
      ]}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  medium: {
    fontFamily: font.medium.fontFamily,
  },
  regular: {
    fontFamily: font.regular.fontFamily,
  },
  title: {
    fontSize: normalizeDimension(18),
    color: APP_TEXT_BLACK,
  },
  bold: {
    fontFamily: font.bold.fontFamily,
  },
  subTitle: {
    fontSize: normalizeDimension(14),
    fontFamily: font.regular.fontFamily,
    color: APP_TEXT_BLACK,
  },
  error: {
    fontSize: normalizeDimension(12),
    lineHeight: 16,
    color: '#FF0118',
    // paddingHorizontal: 20,
    fontFamily: font.regular.fontFamily,
  },
})

export default CustomText
