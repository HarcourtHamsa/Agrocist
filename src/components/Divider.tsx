import React from 'react'
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native'
interface IDivider {
  style?: StyleProp<ViewStyle>
}

const Divider = ({style}: IDivider) => {
  return <View style={[styles.divider, style]} />
}

export default Divider

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    marginTop: 0,
    marginBottom: 10,
    height: 1,
    backgroundColor: '#EDF1F7',
  },
})
