import CustomText from 'components/CustomText'
import {IComponent} from 'interface/IComponent'
import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {flex} from 'styles/layout'
import {padding} from 'styles/spacing'
import {normalizeDimension} from 'utils/sizing'

const HomeScreen = ({navigation}: IComponent) => {
  return (
    <SafeAreaView style={[flex.flex_1, padding.x_20]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <CustomText text={`Home`} type='title' otherStyles={styles.heading} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  heading: {
    fontSize: normalizeDimension(36),
    textAlign: 'left',
    marginVertical: 30,
  },
  container: {
    alignSelf: 'center',
    width: 348,
    maxWidth: '100%',
  },
})
