import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import CustomButton from 'components/CustomButton'
import PublicPageSection from 'components/PublicPageSection'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {padding, margin, width, height} from 'styles/spacing'
import {IComponent} from 'interface/IComponent'
import {pin_success, reg_success} from 'utils/images/list'
import CustomText from 'components/CustomText'
import {SPECIALTY_SCREEN} from 'navigation/constant'

const Success = ({navigation, route}: IComponent) => {
  const from: 'registration' | 'pin' = route?.params.from

  console.log({from})
  const handlePress = () => {
    try {
      if (from === 'registration') {
        return navigation.navigate(SPECIALTY_SCREEN)
      } else {
        // for reset pin users
      }
    } catch (error) {
      console.log({error})
    }
  }
  return (
    <SafeAreaView style={[flex.flex_1, background.white]}>
      <PublicPageSection
        navigation={navigation}
        title={undefined}
        description={undefined}
      />
      <View style={[padding.x_20, flex.alignCenter]}>
        <Image
          resizeMode={'contain'}
          source={from === 'registration' ? reg_success : pin_success}
          style={[width[280], height[200]]}
        />
        <CustomText
          text={from === 'registration' ? `Congratulations` : `PIN Reset`}
          type='title'
          otherStyles={[margin.t_30, margin.b_30]}
        />
        <CustomText
          text={
            from === 'registration'
              ? `You can start using the app to carry out your deliveries`
              : `Your PIN has been reset successfully`
          }
          otherStyles={[width[170], margin.b_10]}
        />
        <CustomButton
          title={from === 'registration' ? `Continue` : `Back to Home`}
          onPress={handlePress}
          containerStyle={margin.t_20}
        />
        <CustomButton
          title={`Keep Going`}
          onPress={() => navigation.navigate(SPECIALTY_SCREEN)}
        />
      </View>
    </SafeAreaView>
  )
}

export default Success

const styles = StyleSheet.create({})
