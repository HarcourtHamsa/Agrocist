import React from 'react'
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native'
import {APP_WHITE, APP_TEXT_BLACK} from 'styles/constant'
import {margin} from 'styles/spacing'
import {back as backImage} from 'utils/images/list'
import CustomText from './CustomText'
import Divider from './Divider'

interface IAppBar {
  navigation?: any
  back?: boolean
  inLineBar?: boolean
  title?: string
  trailingText?: string
  onPress?: () => void
  handleTrailingAction?: () => void
  onIconClick?: (event: GestureResponderEvent) => void
  otherStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
  imageSource?: ImageSourcePropType
  imageSourceStyle?: StyleProp<ImageStyle>
  showDivider?: boolean
}

const Appbar = ({
  navigation,
  onPress,
  back,
  inLineBar,
  title,
  trailingText,
  otherStyles,
  textStyles,
  handleTrailingAction,
  imageSource,
  imageSourceStyle,
  showDivider,
}: IAppBar) => {
  return (
    <>
      <View
        style={[
          styles.row,
          styles.container,
          inLineBar && styles.inLineContainer,
          otherStyles,
        ]}>
        {back && navigation && (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={onPress ? onPress : () => navigation.goBack()}>
            <Image
              resizeMode='contain'
              style={[styles.image, imageSourceStyle]}
              source={imageSource ?? backImage}
            />
          </TouchableOpacity>
        )}
        {title && (
          <View
            style={[
              styles.textContainer,
              {
                marginRight: back && inLineBar && !trailingText ? 40 : 0,
              },
            ]}>
            <CustomText
              text={title}
              type='title'
              otherStyles={[
                styles.text,
                back && !trailingText && styles.mr_30,
                inLineBar && styles.inLineText,
                textStyles,
              ]}
            />
          </View>
        )}
        {trailingText && handleTrailingAction && (
          <TouchableOpacity style={styles.pr_20} onPress={handleTrailingAction}>
            <CustomText text={trailingText} otherStyles={styles.trailingText} />
          </TouchableOpacity>
        )}
      </View>
      {showDivider === true && <Divider style={margin.zero} />}
    </>
  )
}

export default Appbar

const styles = StyleSheet.create({
  row: {
    height: 100,
    width: '100%',
  },
  container: {
    width: '100%',
    marginTop: 20,
  },
  inLineContainer: {
    flexDirection: 'row',
    backgroundColor: APP_WHITE,
    marginTop: 0,
    paddingBottom: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageContainer: {
    width: 50,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    color: APP_TEXT_BLACK,
    textAlignVertical: 'center',
    textAlign: 'center',
    width: '100%',
  },
  mr_30: {
    marginRight: 30,
  },
  pr_20: {
    paddingRight: 20,
  },
  inLineText: {
    fontSize: 16,
    color: APP_TEXT_BLACK,
  },
  trailingText: {
    color: '#8F9BB3',
  },
})
