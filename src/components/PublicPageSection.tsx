import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {padding, height, width, margin} from 'styles/spacing'
import {back} from 'utils/images/list'
import {INavigation} from 'interface/IComponent'
import {font, font_size} from 'styles/typography'
import CustomText from './CustomText'

interface IPublicPageSection {
  navigation: INavigation
  title: string | undefined
  description: string | undefined
}

const PublicPageSection = ({
  navigation,
  title,
  description,
}: IPublicPageSection) => {
  return (
    <View style={[padding.x_20]}>
      <View style={[padding.b_20_percent]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            resizeMode='contain'
            source={back}
            style={[height[21], width[21], margin.t_10]}
          />
        </Pressable>
      </View>
      {title !== undefined && (
        <CustomText
          left
          text={title}
          otherStyles={[font.bold, font_size[20], margin.b_10]}
        />
      )}
      {description !== undefined && (
        <CustomText
          left
          otherStyles={[font_size[14], width[215]]}
          text={description}
        />
      )}
    </View>
  )
}

export default PublicPageSection

const styles = StyleSheet.create({})
