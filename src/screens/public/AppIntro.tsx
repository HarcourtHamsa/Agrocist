import React, {useState} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import CustomText from 'components/CustomText'
import Loader from 'components/Loader'
import {intro} from 'utils/data'
import {IComponent} from 'interface/IComponent'
import {APP_GREEN} from 'styles/constant'
import {height, margin, width} from 'styles/spacing'
import {border, flex} from 'styles/layout'
import {color, font, font_size} from 'styles/typography'
import {IIntroItem} from 'interface/IGeneral'
import {background} from 'styles/background'
import {slide_next, slide_prev} from 'utils/images/list'
import {LOGIN_SCREEN} from 'navigation/constant'

const IntroNavButton = ({type}: {type: 'forward' | 'back'}) => (
  <View style={[]}>
    <Image
      resizeMode={'contain'}
      source={type === 'forward' ? slide_next : slide_prev}
      style={[width[50], height[50]]}
    />
  </View>
)

const AppIntro = ({navigation, route}: IComponent) => {
  const [showRealApp, setShowRealApp] = useState(false)

  const handleDone = async () => {
    navigation.navigate(LOGIN_SCREEN)
  }

  const renderItem = ({item}: {item: IIntroItem}) => {
    return (
      <View style={[flex.flex_1, background.white]}>
        <View
          style={[
            border.width_1,
            flex.flex_1,
            flex.alignCenter,
            flex.justifyCenter,
          ]}>
          <Image
            resizeMode='contain'
            style={[{height: item.height, width: item.width}]}
            source={item.image}
          />
          <CustomText
            text={item.title}
            otherStyles={[
              font_size[18],
              color.text_green,
              font.bold,
              margin.t_30,
              margin.b_30,
            ]}
          />
          <CustomText
            text={item.text}
            otherStyles={[
              color.text_black,
              font.light,
              margin.t_10,
              font_size[14],
              width[230],
            ]}
          />
        </View>
      </View>
    )
  }

  if (showRealApp) {
    return <Loader />
  } else {
    return (
      <AppIntroSlider
        renderItem={renderItem}
        onDone={handleDone}
        data={intro}
        dotStyle={background.intro_gray}
        showPrevButton={true}
        renderPrevButton={() => <IntroNavButton type={`back`} />}
        renderNextButton={() => <IntroNavButton type={`forward`} />}
        renderDoneButton={() => <IntroNavButton type={`forward`} />}
        activeDotStyle={{
          backgroundColor: APP_GREEN,
        }}
      />
    )
  }
}

export default AppIntro
