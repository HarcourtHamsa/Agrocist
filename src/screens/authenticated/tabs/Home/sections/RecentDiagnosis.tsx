import {FlatList, Image, StyleSheet, Dimensions, View} from 'react-native'
import React from 'react'
import CustomText from 'components/CustomText'
import {color, font} from 'styles/typography'
import {font_size} from 'styles/typography'
import {margin, padding} from 'styles/spacing'
import {sample_display} from 'utils/images/list'

const {width} = Dimensions.get('screen')

const data = [1, 2, 3, 4, 5]

const RecentDiagnosis = () => {
  return (
    <View style={[padding.t_20]}>
      <CustomText
        left
        text={`Recent Diagnosis`}
        otherStyles={[color.text_green, font.bold, font_size[18], margin.b_20]}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => (
          <View style={[margin.r_10]}>
            <Image source={sample_display} style={styles.image} />
          </View>
        )}
        style={[]}
        ListEmptyComponent={<CustomText text={`No data`} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any, index: number) => `diagnosis${index}`}
      />
    </View>
  )
}

export default RecentDiagnosis

const styles = StyleSheet.create({
  image: {
    maxWidth: width / 2,
    width: 156,
    height: 82,
    borderRadius: 6,
  },
})
