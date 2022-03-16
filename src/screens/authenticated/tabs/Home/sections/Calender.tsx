import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import CustomText from 'components/CustomText'
import {padding, margin, height} from 'styles/spacing'
import {color, font, font_size} from 'styles/typography'
import {background} from 'styles/background'
import {border} from 'styles/layout'

const data = [1, 2, 3, 4, 5]

const Calender = () => {
  return (
    <View style={[padding.t_20]}>
      <CustomText
        left
        text={`Farmer's Calender`}
        otherStyles={[color.text_green, font.bold, font_size[18], margin.b_20]}
      />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View
            style={[
              height[84],
              margin.b_10,
              border.radius_10,
              background.faint_green,
            ]}></View>
        )}
        style={[]}
        ListEmptyComponent={<CustomText text={`No data`} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any, index: number) => `diagnosis${index}`}
      />
    </View>
  )
}

export default Calender

const styles = StyleSheet.create({})
