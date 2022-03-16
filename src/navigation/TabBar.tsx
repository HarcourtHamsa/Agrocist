import React from 'react'
import {View, TouchableOpacity, Image, StyleSheet, Platform} from 'react-native'
import * as Images from 'utils/images/list'
import {APP_GREEN, APP_TEXT_BLACK} from '../styles/constant'
import {normalizeDimension} from 'utils/sizing'
import CustomText from 'components/CustomText'

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key]
        let iconName
        route.name === 'Home'
          ? (iconName = {
              normal: Images.home,
              active: Images.home_active,
            })
          : (iconName = {
              normal: Images.setting,
              active: Images.setting_active,
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
                styles.text,
                {color: isFocused ? APP_GREEN : APP_TEXT_BLACK},
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
    width: normalizeDimension(20),
    height: normalizeDimension(20),
    marginBottom: 2,
  },
  text: {
    fontSize: 12,
    marginVertical: 0,
    paddingHorizontal: 0,
  },
})

export default TabBar
