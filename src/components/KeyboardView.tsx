import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import {flex} from 'styles/layout'

const KeyboardView = ({
  children,
  style,
  keyboardVerticalOffset,
  isChat,
}: {
  children: any
  style?: StyleProp<ViewStyle>
  keyboardVerticalOffset?: number
  isChat?: boolean
}) => {
  return (
    <KeyboardAvoidingView
      style={flex.flex_1}
      behavior={
        isChat === true
          ? Platform.OS === 'ios'
            ? 'padding'
            : undefined
          : Platform.OS === 'ios'
          ? 'padding'
          : 'height'
      }
      keyboardVerticalOffset={
        keyboardVerticalOffset ?? Platform.OS === 'ios' ? 30 : 20
      }>
      <View style={[{flex: 1}, style]}>{children}</View>
    </KeyboardAvoidingView>
  )
}

export default KeyboardView

const styles = StyleSheet.create({})
