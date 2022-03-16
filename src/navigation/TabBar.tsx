import React from 'react'
import {View, TouchableOpacity, Image, StyleSheet, Platform} from 'react-native'
import * as Images from 'utils/images/list'
import {normalizeDimension} from 'utils/sizing'
import CustomText from 'components/CustomText'
import {margin, padding} from '../styles/spacing'
import {color, font, font_size} from 'styles/typography'

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key]
        let iconName
        route.name === 'Home'
          ? (iconName = {
              normal: Images.home_inactive,
              active: Images.home_active,
            })
          : route.name === 'Diagnosis'
          ? (iconName = {
              normal: Images.diagnosis_inactive,
              active: Images.diagnosis_active,
            })
          : (iconName = {
              normal: Images.community_inactive,
              active: Images.community_active,
            })

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onPress}
            style={styles.button}>
            <Image
              resizeMode='contain'
              source={isFocused ? iconName.active : iconName.normal}
              style={styles.image}
            />
            <CustomText
              type='subTitle'
              text={route.name}
              otherStyles={[
                padding.x_0,
                margin.x_0,
                font_size[10],
                isFocused
                  ? [color.text_green, font.bold]
                  : [color.text_black, font.light],
              ]}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: Platform.OS === 'ios' ? 80 : 60,
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
    justifyContent: 'space-around',
    alignItems: Platform.OS === 'ios' ? 'flex-start' : 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
  },
  image: {
    width: normalizeDimension(30),
    height: normalizeDimension(27),
    marginBottom: 2,
  },
})

export default TabBar
