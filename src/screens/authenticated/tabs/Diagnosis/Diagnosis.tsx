import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native'
import React, {useCallback, useState} from 'react'
import {IComponent} from 'interface/IComponent'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {height, margin, padding, width} from 'styles/spacing'
import BottomSheet from 'components/Modal/BottomSheet'
import {useFocusEffect} from '@react-navigation/native'
import Appbar from 'components/Appbar'
import CustomText from 'components/CustomText'
import {color, font, font_size} from 'styles/typography'
import {diagnosisPictureOption} from 'utils/data'

const Diagnosis = ({navigation}: IComponent) => {
  const [launchModal, setLaunchModal] = useState(false)

  useFocusEffect(
    useCallback(() => {
      setLaunchModal(true)
    }, []),
  )

  const handleLaunch = () => {
    setLaunchModal(false)
  }

  return (
    <SafeAreaView style={[flex.flex_1, padding.x_20, background.white]}>
      <Appbar back={true} navigation={navigation} inLineBar={true} />

      <BottomSheet setLaunchModal={setLaunchModal} modalState={launchModal}>
        <View style={[padding.y_10]}>
          {diagnosisPictureOption.map(option => (
            <Pressable
              onPress={handleLaunch}
              style={[flex.alignCenter, margin.b_40]}
              key={option.id}>
              <Image source={option.image} style={[height[102], width[102]]} />
              <CustomText
                text={option.title}
                otherStyles={[
                  color.text_green,
                  font_size[18],
                  margin.t_10,
                  font.bold,
                ]}
              />
            </Pressable>
          ))}
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default Diagnosis

const styles = StyleSheet.create({})
