import AppbarWithImage from 'components/AppbarWithImage'
import CustomButton from 'components/CustomButton'
import FormInput from 'components/FormInput'
import KeyboardView from 'components/KeyboardView'
import TransparentButton from 'components/TransparentButton'
import {IComponent} from 'interface/IComponent'
import {CREATE_ACCOUNT_SCREEN, RESET_PIN_SCREEN} from 'navigation/constant'
import React, {useState} from 'react'
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native'

import {useDispatch} from 'react-redux'
import {Dispatch} from 'redux'
import {initiateAuthorization, initiateLogin} from 'services/Login'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {height, padding, margin} from 'styles/spacing'
import {loadingAndErrorDefault} from 'utils/data/defaults'
import * as Helpers from 'utils/display'
import {handleTextInput} from 'utils/input/helper'
import {font, color} from '../../styles/typography'

const LoginScreen = ({navigation}: IComponent) => {
  const dispatch: Dispatch<any> = useDispatch()

  const [loginForm, setLoginForm] = useState({
    mobileNumber: {value: '', error: ''},
    pin: {value: '', error: ''},
  })

  const [loadingAndError, setLoadingAndError] = useState(loadingAndErrorDefault)

  const handleLogin = async () => {
    try {
      Helpers.startLoader(setLoadingAndError)

      const mobileNumber = loginForm.mobileNumber.value
      const pin = loginForm.pin.value

      const authRequest: boolean = await initiateAuthorization(
        mobileNumber,
        pin,
        setLoadingAndError,
        dispatch,
      )
      if (authRequest === true) {
        initiateLogin(dispatch)
      }
    } catch (error) {
      console.log({error})
      const errorMessage =
        error instanceof Error ? error.toString()?.split(']')[1] : 'Login Error'
      console.log({errorMessage})
      return Helpers.catchHelper(setLoadingAndError, {}, errorMessage, true)
    } finally {
      Helpers.stopLoader(setLoadingAndError)
    }
  }

  return (
    <>
      <SafeAreaView style={[flex.flex_1, background.white, height.min_full]}>
        <KeyboardView>
          <ScrollView
            keyboardShouldPersistTaps='always'
            contentContainerStyle={[flex.grow_1]}>
            {/* flex.alignCenter */}
            <View style={[]}>
              <AppbarWithImage text_1={`Welcome`} text_2={`Back`} />
              <View style={[padding.x_20]}>
                <FormInput
                  containerStyle={padding.t_10}
                  placeholder='Phone number'
                  icon='phone'
                  value={loginForm.mobileNumber.value}
                  error={loginForm.mobileNumber.error}
                  autoCapitalize='none'
                  keyboardType='phone-pad'
                  onChangeText={(text: string) =>
                    handleTextInput(setLoginForm, text, 'mobileNumber')
                  }
                />
                <FormInput
                  containerStyle={margin.b_10}
                  placeholder='PIN'
                  icon='pin'
                  autoCapitalize='none'
                  value={loginForm.pin.value}
                  error={loginForm.pin.error}
                  secureTextEntry={true}
                  onChangeText={(text: string) =>
                    handleTextInput(setLoginForm, text, 'pin')
                  }
                />
                <TransparentButton
                  pressableText={`Forgot PIN?`}
                  containerStyle={[padding.r_20, flex.selfEnd]}
                  onPress={() => navigation.navigate(RESET_PIN_SCREEN)}
                />
                <CustomButton
                  loading={loadingAndError.loading}
                  // disabled={
                  //   !validateLoginValues(
                  //     loginForm.mobileNumber.value,
                  //     loginForm.pin.value,
                  //   )
                  // }
                  title={`Login`}
                  onPress={handleLogin}
                  containerStyle={[margin.t_40, margin.x_20]}
                />
                <TransparentButton
                  pressableText={` Sign Up`}
                  descriptionText={`Don't have an account? `}
                  containerStyle={[padding.t_20, flex.justifyCenter]}
                  pressableTextStyle={[color.text_green, font.bold]}
                  onPress={() => navigation.navigate(CREATE_ACCOUNT_SCREEN)}
                  //   SPECIALTY_SCREEN
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})

export default LoginScreen
