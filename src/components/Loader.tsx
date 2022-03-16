import React from 'react'
import {ActivityIndicator, ColorValue, View} from 'react-native'
import {APP_GREEN} from 'styles/constant'
import {flex} from 'styles/layout'

interface ILoader {
  size?: number | 'large' | 'small' | undefined
  color?: ColorValue
  centralize?: boolean
}
//
const Loader = ({size, color, centralize}: ILoader) => {
  return (
    <View
      style={
        size === 'large' || centralize
          ? [flex.alignCenter, flex.flex_1, flex.justifyCenter]
          : {width: 30}
      }>
      <ActivityIndicator size={size ?? 'small'} color={color ?? APP_GREEN} />
    </View>
  )
}

export default Loader
