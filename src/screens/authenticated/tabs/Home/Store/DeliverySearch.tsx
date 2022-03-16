import Appbar from 'components/Appbar'
import CustomText from 'components/CustomText'
import {IComponent} from 'interface/IComponent'
import React from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import {background} from 'styles/background'
import {border, flex} from 'styles/layout'
import {height, margin, padding, width} from 'styles/spacing'
import {search} from 'utils/images/list'

const data = [1, 2, 3, 4, 5]

const DeliverySearch = ({navigation}: IComponent) => {
  return (
    <SafeAreaView style={[flex.flex_1, padding.x_20, background.gray]}>
      <Appbar back={true} navigation={navigation} inLineBar={true} />
      <View style={[padding.x_20, margin.t_20, flex.flex_1]}>
        <View
          style={[
            height[50],
            background.white,
            width.full,
            border.radius_21,
            flex.row,
            padding.l_10,
            flex.alignCenter,
            // border.width_1,
          ]}>
          <TextInput style={[flex.flex_1, height.full]} placeholder='Search' />
          <Image
            resizeMode={'contain'}
            source={search}
            style={[height[17], width[20], margin.r_8]}
          />
        </View>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View
              style={[
                height[130],
                margin.b_10,
                border.radius_10,
                background.white,
              ]}></View>
          )}
          style={[margin.t_20]}
          contentContainerStyle={[flex.grow_1]}
          ListEmptyComponent={<CustomText text={`No data`} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any, index: number) => `diagnosis${index}`}
        />
      </View>
    </SafeAreaView>
  )
}

export default DeliverySearch

const styles = StyleSheet.create({})
