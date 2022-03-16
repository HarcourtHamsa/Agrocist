import {IComponent} from 'interface/IComponent'
import React, {useState} from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {flex} from 'styles/layout'

const UserProfile = ({navigation, route}: IComponent) => {
  return <SafeAreaView style={[flex.flex_1]}></SafeAreaView>
}

export default UserProfile

const styles = StyleSheet.create({})
