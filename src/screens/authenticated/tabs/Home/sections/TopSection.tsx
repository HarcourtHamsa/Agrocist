import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native'
import React from 'react'
import {border, flex, overflow} from 'styles/layout'
import * as ImageAssets from 'utils/images/list'
import {height, margin, padding, width} from 'styles/spacing'
import {background} from 'styles/background'
import CustomText from 'components/CustomText'
import {APP_GREEN} from 'styles/constant'
import {color, font, font_size} from 'styles/typography'
import {useSelector} from 'react-redux'
import {RootState} from 'interface/IRedux'
import {IUser} from 'interface/IUser'
import {INavigation} from 'interface/IComponent'
import {FIND_DELIVERY_SCREEN} from 'navigation/constant'
import {clickableCardOptions} from 'utils/data'

interface ITopSection {
  navigation: INavigation
}

const TopSection = ({navigation}: ITopSection) => {
  const user: IUser = useSelector((state: RootState) => state.user.userDetail)

  return (
    <View style={[]}>
      <View
        style={[flex.row, flex.justifyBetween, flex.alignCenter, padding.t_10]}>
        <Pressable>
          <Image
            resizeMode={'contain'}
            source={ImageAssets.hamburger}
            style={[width[38], height[38]]}
          />
        </Pressable>
        <Pressable>
          <Image
            resizeMode={'contain'}
            source={ImageAssets.dot_dropdown}
            style={[width[24], height[24]]}
          />
        </Pressable>
      </View>

      <View style={[flex.row, flex.justifyBetween, padding.y_20]}>
        <CustomText
          left
          text={`Welcome, ${user.business_individual_name}!`}
          otherStyles={[color.text_green, font_size[24], font.bold]}
        />
        <Image
          resizeMode={'center'}
          source={ImageAssets.user}
          style={[
            width[38],
            height[38],
            {borderRadius: 38 / 2, borderWidth: 2, borderColor: APP_GREEN},
          ]}
        />
      </View>

      <View
        style={[
          height[50],
          background.white,
          width.full,
          border.radius_21,
          flex.row,
          padding.l_10,
          flex.alignCenter,
        ]}>
        <Image
          source={ImageAssets.search_lg}
          style={[height[30], width[30], margin.r_8]}
        />
        <TextInput style={[]} placeholder='Search' />
      </View>

      <View
        style={[
          height[84],
          width.full,
          flex.row,
          margin.y_20,
          padding.x_20,
          padding.y_15,
          background.white,
          border.radius_6,
          flex.justifyBetween,
          {
            shadowColor: '#ffffff',
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          },
        ]}>
        <View style={[flex.justifyBetween]}>
          <CustomText
            left
            text={`Locate Agro Input Stores Close to you`}
            otherStyles={[font_size[12], font.regular, color.text_green]}
          />
          <Pressable
            onPress={() => navigation.navigate(FIND_DELIVERY_SCREEN)}
            style={[
              height[25],
              background.green,
              width[90],
              flex.alignCenter,
              flex.justifyCenter,
              border.radius_10,
            ]}>
            <CustomText
              text={`Locate`}
              otherStyles={[color.text_white, font_size[12]]}
            />
          </Pressable>
        </View>
        <View>
          <Image source={ImageAssets.shop} style={styles.shop} />
        </View>
      </View>

      <View style={[flex.row, flex.justifyBetween]}>
        {clickableCardOptions.map(option => (
          <View
            key={option.id}
            style={[
              height[141],
              option.isGreen ? background.green : background.white,
              border.radius_17,
              padding.y_20,
              padding.x_20,
              overflow.hidden,
              {width: '47%'},
            ]}>
            <Image
              resizeMode={'contain'}
              source={option.image}
              style={[width[24], height[24]]}
            />
            <CustomText
              left
              text={option.title}
              otherStyles={[
                padding.t_5,
                font_size[16],
                option.isGreen ? color.text_white : color.text_green,
              ]}
            />
            <CustomText
              left
              text={option.text}
              otherStyles={[
                font_size[10],
                font.light,
                padding.t_5,
                option.isGreen ? [color.text_white] : [color.text_green],
              ]}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

export default TopSection

const styles = StyleSheet.create({
  shop: {
    width: 47,
    height: 38,
  },
})
