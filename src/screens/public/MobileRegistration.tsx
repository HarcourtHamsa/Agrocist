import {SafeAreaView, View} from 'react-native'
import React, {useState} from 'react'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {margin, padding} from 'styles/spacing'
import {IComponent} from 'interface/IComponent'
import FormInput from 'components/FormInput'
import {loadingAndErrorDefault} from 'utils/data/defaults'
import CustomButton from 'components/CustomButton'
import PublicPageSection from 'components/PublicPageSection'
import {SUCCESS_SCREEN} from 'navigation/constant'
import networkRequest from 'utils/api/networkRequest'
import {catchHelper, startLoader, stopLoader} from 'utils/display'
import {IResponse} from 'interface/Request'
import {CREATE_ACCOUNT} from 'utils/api/constant'
import {initiateAuthorization} from 'services/Login'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'

const MobileRegistration = ({navigation, route}: IComponent) => {
  const dispatch: Dispatch<any> = useDispatch()

  const payload = route?.params.payload

  const [mobileNumber, setMobileNumber] = useState('')
  const [loadingAndError, setLoadingAndError] = useState(loadingAndErrorDefault)

  const handleSubmitMobileNumber = async () => {
    try {
      startLoader(setLoadingAndError)
      delete payload.confirm_password
      const model = {
        ...payload,
        phonenumber: mobileNumber,
      }

      const request: IResponse = await networkRequest.post(
        CREATE_ACCOUNT,
        model,
      )
      if (request.success) {
        const authRequest: boolean = await initiateAuthorization(
          mobileNumber,
          model.pin,
          setLoadingAndError,
          dispatch,
        )
        if (authRequest) {
          stopLoader(setLoadingAndError)
          navigation.navigate(SUCCESS_SCREEN, {from: 'registration'})
          return
        }
      }
      catchHelper(setLoadingAndError, request, `Sign up failed`)
    } catch (error) {
      catchHelper(setLoadingAndError, error, `Network Error`)
    }
  }
  return (
    <SafeAreaView style={[flex.flex_1, background.white]}>
      <PublicPageSection
        title={`Mobile number`}
        description={`Please enter your phone number`}
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
        <CustomButton
          title={`Keep Going`}
          onPress={() =>
            navigation.navigate(SUCCESS_SCREEN, {from: 'registration'})
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default MobileRegistration
