import {IComponent} from 'interface/IComponent'
import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {padding} from 'styles/spacing'
import Calender from './sections/Calender'
import RecentDiagnosis from './sections/RecentDiagnosis'
import TopSection from './sections/TopSection'
import Weather from './sections/Weather'

const HomeScreen = ({navigation}: IComponent) => {
  return (
    <SafeAreaView style={[flex.flex_1, padding.x_20, background.light_green]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[padding.x_20]}>
        <TopSection navigation={navigation} />
        <RecentDiagnosis />
        <Weather />
        <Calender />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
