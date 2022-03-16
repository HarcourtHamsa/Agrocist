import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {IComponent} from 'interface/IComponent'
import CustomButton from 'components/CustomButton'
import FormInput from 'components/FormInput'
import PublicPageSection from 'components/PublicPageSection'
import {CREATE_PIN_SCREEN} from 'navigation/constant'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {padding, margin} from 'styles/spacing'
import {loadingAndErrorDefault} from 'utils/data/defaults'

const ResetPIN = ({navigation}: IComponent) => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [loadingAndError, setLoadingAndError] = useState(loadingAndErrorDefault)

  const handleSubmitMobileNumber = () => {
    try {
      navigation.navigate(CREATE_PIN_SCREEN)
    } catch (error) {}
  }
  return (
    <SafeAreaView style={[flex.flex_1, background.white]}>
      <PublicPageSection
        title={`Reset your PIN`}
        description={`Please enter your phone number to get an OTP code`}
        navigation={navigation}
      />
      <View style={[padding.x_20]}>
        <FormInput
          containerStyle={padding.t_5}
          placeholder={``}
          value={mobileNumber}
          error={loadingAndError.error}
          autoCapitalize='none'
          keyboardType='phone-pad'
          onChangeText={(text: string) => setMobileNumber(text)}
        />
        <CustomButton
          loading={loadingAndError.loading}
          disabled={mobileNumber.length !== 11}
          title={`Continue`}
          onPress={handleSubmitMobileNumber}
          containerStyle={margin.t_20}
        />
      </View>
    </SafeAreaView>
  )
}

export default ResetPIN

const styles = StyleSheet.create({})
