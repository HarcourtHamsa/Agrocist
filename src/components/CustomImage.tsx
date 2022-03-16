import React, {useState} from 'react'
import {
  StyleSheet,
  Image,
  ImageStyle,
  StyleProp,
  ImageResizeMode,
} from 'react-native'
import {generateProfilePicture} from 'utils/images/helper'
import {general_profile} from 'utils/images/list'

interface ICustomImage {
  imageStyle?: StyleProp<ImageStyle>
  userId: string
  resizeMode?: ImageResizeMode
}
const CustomImage = ({userId, imageStyle, resizeMode}: ICustomImage) => {
  const imageURL = generateProfilePicture(userId, 'm')

  const [imageSource, setImageSource] = useState({uri: imageURL})

  return (
    <Image
      defaultSource={general_profile}
      resizeMode={
        resizeMode ?? imageSource === general_profile ? 'contain' : 'cover'
      }
      source={imageSource}
      style={[styles.userImage, imageStyle]}
      onError={error => setImageSource(general_profile)}
    />
  )
}

export default CustomImage

const styles = StyleSheet.create({
  userImage: {
    height: 56,
    width: 56,
    marginRight: 10,
    borderRadius: 12,
  },
})
