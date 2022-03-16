import React from 'react'
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import {flex} from 'styles/layout'
import {padding} from 'styles/spacing'
import {normalizeDimension} from 'utils/sizing'
import CustomButton from './CustomButton'
import CustomText from './CustomText'
import Loader from './Loader'

interface IEMessage {
  onPress?: () => void
  imageSource: ImageSourcePropType
  title: string
  buttonText?: string
  description: string
  loading?: boolean
  containerStyle?: StyleProp<ViewStyle>
}

const Empty = ({
  onPress,
  imageSource,
  title,
  description,
  loading,
  containerStyle,
  buttonText,
}: IEMessage) => {
  return (
    <>
      {loading === true ? (
        <View style={[padding.t_20]}>
          <Loader centralize />
        </View>
      ) : (
        <SafeAreaView style={[flex.flex_1, styles.container, containerStyle]}>
          <View style={styles.mainContainer}>
            <Image
              source={imageSource}
              resizeMode='contain'
              style={styles.image}
            />
            <CustomText type='title' text={title} otherStyles={styles.title} />
            <CustomText text={description} otherStyles={styles.description} />
          </View>
          {onPress !== undefined && buttonText && (
            <CustomButton
              title={buttonText ?? 'Hire a Tasker'}
              onPress={onPress}
              containerStyle={styles.button}
            />
          )}
        </SafeAreaView>
      )}
    </>
  )
}

export default Empty

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F8',
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: normalizeDimension(280),
    height: normalizeDimension(201, 'height'),
  },
  title: {
    fontSize: normalizeDimension(20),
    textTransform: 'capitalize',
    marginTop: 50,
  },
  description: {
    width: normalizeDimension(247),
    fontSize: normalizeDimension(15),
    marginTop: 12,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 20,
  },
})
