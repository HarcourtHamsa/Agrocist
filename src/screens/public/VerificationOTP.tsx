import {SafeAreaView, StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import CustomButton from 'components/CustomButton'
import FormInput from 'components/FormInput'
import PublicPageSection from 'components/PublicPageSection'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {padding, margin} from 'styles/spacing'
import {IComponent} from 'interface/IComponent'
import {loadingAndErrorDefault} from 'utils/data/defaults'
import CustomText from 'components/CustomText'
import {SUCCESS_SCREEN} from 'navigation/constant'

const VerificationOTP = ({navigation}: IComponent) => {
  const [otp, setOTP] = useState('')
  const [loadingAndError, setLoadingAndError] = useState(loadingAndErrorDefault)

  const handleOTPSubmission = () => {
    try {
      navigation.navigate(SUCCESS_SCREEN, {from: 'otp'})
    } catch (error) {}
  }

  return (
    <SafeAreaView style={[flex.flex_1, background.white]}>
      <PublicPageSection
        navigation={navigation}
        title={`Verification codes OTP`}
        description={`A verification codes has been sent to your Phone number`}
      />
      <View style={[padding.x_20]}>
        <FormInput
          containerStyle={padding.t_5}
          placeholder={``}
          value={otp}
          error={loadingAndError.error}
          autoCapitalize='none'
          keyboardType='phone-pad'
          onChangeText={(text: string) => setOTP(text)}
        />
        <CustomButton
          loading={loadingAndError.loading}
          disabled={otp.length !== 4}
          title={`Verify`}
          onPress={handleOTPSubmission}
          containerStyle={margin.t_20}
        />
        <CustomText text={`Resend (0:55s)`} />
      </View>
    </SafeAreaView>
  )
}

export default VerificationOTP

const styles = StyleSheet.create({})
