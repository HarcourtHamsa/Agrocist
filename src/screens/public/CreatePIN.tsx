import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import CustomButton from 'components/CustomButton'
import FormInput from 'components/FormInput'
import PublicPageSection from 'components/PublicPageSection'
import {IComponent} from 'interface/IComponent'
import {SUCCESS_SCREEN} from 'navigation/constant'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {padding, margin} from 'styles/spacing'
import {loadingAndErrorDefault} from 'utils/data/defaults'

const CreatePIN = ({navigation}: IComponent) => {
  const [pin, setPin] = useState({
    value: '',
    confirm: '',
  })
  const [loadingAndError, setLoadingAndError] = useState(loadingAndErrorDefault)

  const handleSubmitMobileNumber = () => {
    try {
      navigation.navigate(SUCCESS_SCREEN, {from: 'pin'})
    } catch (error) {}
  }

  const handleInput = (text: string, key: 'value' | 'confirm') => {
    setPin(prevState => ({
      ...prevState,
      [key]: text,
    }))
  }

  return (
    <SafeAreaView style={[flex.flex_1, background.white]}>
      <PublicPageSection
        title={`Create new PIN`}
        description={`Create a password you will always be able to remember.`}
        navigation={navigation}
      />
      <View style={[padding.x_20]}>
        <FormInput
          containerStyle={padding.t_5}
          placeholder={`New PIN`}
          value={pin.value}
          error={loadingAndError.error}
          autoCapitalize='none'
          keyboardType='phone-pad'
          onChangeText={(text: string) => handleInput(text, 'value')}
        />
        <FormInput
          placeholder={`Confirm PIN`}
          value={pin.confirm}
          error={loadingAndError.error}
          autoCapitalize='none'
          keyboardType='phone-pad'
          onChangeText={(text: string) => handleInput(text, 'confirm')}
        />
        <CustomButton
          loading={loadingAndError.loading}
          disabled={pin.value.length !== 4}
          title={`Continue`}
          onPress={handleSubmitMobileNumber}
          containerStyle={margin.t_20}
        />
      </View>
    </SafeAreaView>
  )
}

export default CreatePIN

const styles = StyleSheet.create({})
