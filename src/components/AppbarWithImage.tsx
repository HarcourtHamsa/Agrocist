import {INavigation} from 'interface/IComponent'
import React from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {APP_WHITE} from 'styles/constant'
import {border, flex} from 'styles/layout'
import {height, padding, width} from 'styles/spacing'
import {font, font_size} from 'styles/typography'
import {back, logo_4} from 'utils/images/list'
import Appbar from './Appbar'
import CustomText from './CustomText'
import Divider from './Divider'

interface IAppTab {
  text_1: string
  text_2: string
  navigation?: INavigation | undefined
}

const AppbarWithImage = ({text_1, text_2, navigation}: IAppTab) => {
  return (
    <ImageBackground
      resizeMode='cover'
      style={[height[210], width.full, flex.justifyEnd]}
      source={logo_4}>
      {navigation && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={[flex.flex_1, flex.justifyCenter, padding.l_20]}>
          <Image source={back} style={[height[20], width[24]]} />
        </Pressable>
      )}
      <View style={[flex.justifyEnd, padding.l_20]}>
        <CustomText
          otherStyles={[font_size[28], font.regular]}
          left
          text={text_1}
        />
        <CustomText otherStyles={[font_size[28]]} left text={text_2} />
      </View>
    </ImageBackground>
  )
}

export default AppbarWithImage
