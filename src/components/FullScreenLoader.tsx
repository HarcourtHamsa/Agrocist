import {StyleSheet, View} from 'react-native'
import React from 'react'
import Loader from './Loader'

const FullScreenLoader = () => {
  return (
    <View style={styles.loaderContainer}>
      <Loader centralize />
    </View>
  )
}

export default FullScreenLoader

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#C8C8C8',
    opacity: 0.7,
  },
})
