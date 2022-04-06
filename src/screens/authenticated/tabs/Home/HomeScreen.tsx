import CustomText from 'components/CustomText'
import {IComponent} from 'interface/IComponent'
import React from 'react'
import {
  FlatList,
  PermissionsAndroid,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {height, padding, width} from 'styles/spacing'
import Calender from './sections/Calender'
import RecentDiagnosis from './sections/RecentDiagnosis'
import TopSection from './sections/TopSection'
import Weather from './sections/Weather'

const HomeScreen = ({navigation}: IComponent) => {
  const handlePress = async () => {
    console.log('heyyyyyyyyy')
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera')
      } else {
        console.log('Camera permission denied')
      }
    } catch (error) {
      console.log({error})
    }
  }
  return (
    <SafeAreaView style={[flex.flex_1, background.light_green]}>
      <FlatList
        data={[1]}
        contentContainerStyle={[padding.x_20]}
        renderItem={({item, index}) => (
          <>
            <TopSection navigation={navigation} />
            <Pressable
              onPress={handlePress}
              style={[background.faint_green, height[20], width[24]]}>
              <CustomText text={`Helo`} />
            </Pressable>
            <RecentDiagnosis />
            <Weather />
            <Calender />
          </>
        )}
        style={[]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any, index: number) => `diagnosis${index}`}
      />
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[padding.x_20]}> */}

      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
