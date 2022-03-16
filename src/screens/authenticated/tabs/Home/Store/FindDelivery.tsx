import Appbar from 'components/Appbar'
import CustomButton from 'components/CustomButton'
import CustomText from 'components/CustomText'
import TransparentButton from 'components/TransparentButton'
import {IComponent} from 'interface/IComponent'
import {DELIVERY_SEARCH_SCREEN} from 'navigation/constant'
import React from 'react'
import {Image, SafeAreaView, StyleSheet, View} from 'react-native'
import {background} from 'styles/background'
import {flex, image} from 'styles/layout'
import {height, margin, padding, width} from 'styles/spacing'
import {color, font, font_size} from 'styles/typography'
import {store_lg} from 'utils/images/list'

const FindDelivery = ({navigation}: IComponent) => {
  return (
    <SafeAreaView style={[flex.flex_1, padding.x_20, background.white]}>
      <Appbar back={true} navigation={navigation} inLineBar={true} />
      <View style={[flex.flex_1, flex.justifyCenter]}>
        <View style={[flex.alignCenter, padding.b_20_percent]}>
          <Image
            resizeMode={`contain`}
            source={store_lg}
            style={[height[180], image.aspect_1]}
          />
          <CustomText
            text={`Find a nearby Input Store to get Agro Products`}
            otherStyles={[
              font_size[18],
              width[230],
              color.text_black_purple,
              font.bold,
              margin.t_10,
              margin.b_20,
            ]}
          />
          <CustomText
            text={`Please allow app to access your location to find Agro Input Store near you`}
            otherStyles={[font_size[12], width[230], color.text_gray]}
          />
          <CustomButton
            title={`Yes, Allow`}
            onPress={() => navigation.navigate(DELIVERY_SEARCH_SCREEN)}
            containerStyle={[margin.t_40, width[327]]}
          />
          <TransparentButton
            pressableText={`Don't Allow`}
            containerStyle={[padding.t_10, flex.justifyCenter]}
            pressableTextStyle={[color.text_green, font.bold]}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FindDelivery

const styles = StyleSheet.create({})
