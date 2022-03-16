import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import CustomText from 'components/CustomText'
import {padding, margin, height} from 'styles/spacing'
import {color, font, font_size} from 'styles/typography'
import {background} from 'styles/background'
import {border} from 'styles/layout'

const Weather = () => {
  return (
    <View style={[padding.t_20]}>
      <CustomText
        left
        text={`Weather`}
        otherStyles={[color.text_green, font.bold, font_size[18], margin.b_20]}
      />
      <View style={[height[130], background.yellow, border.radius_8]}></View>
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({})
