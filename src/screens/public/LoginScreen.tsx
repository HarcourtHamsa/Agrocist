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
import {font, color} from '../../styles/typography'
import {Formik} from 'formik'
import {loginValue} from 'utils/input/initialValues'
import {login_validation} from 'utils/input/validation'

const LoginScreen = ({navigation}: IComponent) => {
  const dispatch: Dispatch<any> = useDispatch()

  const [loadingAndError, setLoadingAndError] = useState(loadingAndErrorDefault)

  const handleLogin = async (values: any) => {
    try {
      Helpers.startLoader(setLoadingAndError)

      const authRequest: boolean = await initiateAuthorization(
        values.phoneNumber,
        values.password,
        setLoadingAndError,
        dispatch,
        navigation,
        true,
      )
      if (authRequest === true) {
        return initiateLogin(dispatch)
      }
      return Helpers.catchHelper(setLoadingAndError, {}, `Login failed`)
    } catch (error) {
      console.log({error})
      const errorMessage =
        error instanceof Error ? error.message : 'Login Error'
      console.log({errorMessage})
      return Helpers.catchHelper(setLoadingAndError, error, errorMessage)
    }
  }

  return (
    <>
      <SafeAreaView style={[flex.flex_1, background.white, height.min_full]}>
        <KeyboardView>
          <ScrollView
            keyboardShouldPersistTaps='always'
            contentContainerStyle={[flex.grow_1]}>
            <View style={[]}>
              <AppbarWithImage text_1={`Welcome`} text_2={`Back`} />
              <Formik
                initialValues={loginValue}
                validationSchema={login_validation}
                onSubmit={values => handleLogin(values)}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  isValid,
                }) => (
                  <View style={[padding.x_20]}>
                    <FormInput
                      containerStyle={padding.t_10}
                      placeholder='Phone number'
                      icon='phone'
                      autoCapitalize='none'
                      keyboardType='phone-pad'
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={handleBlur('phoneNumber')}
                      touched={touched.phoneNumber}
                      error={errors.phoneNumber}
                    />
                    <FormInput
                      containerStyle={margin.b_10}
                      placeholder='PIN'
                      icon='pin'
                      autoCapitalize='none'
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      touched={touched.password}
                      error={errors.password}
                    />
                    <TransparentButton
                      pressableText={`Forgot PIN?`}
                      containerStyle={[padding.r_20, flex.selfEnd]}
                      onPress={() => navigation.navigate(RESET_PIN_SCREEN)}
                    />
                    <CustomButton
                      loading={loadingAndError.loading}
                      disabled={!isValid}
                      title={`Login`}
                      onPress={handleSubmit}
                      containerStyle={[margin.t_40, margin.x_20]}
                    />
                    <TransparentButton
                      pressableText={` Sign Up`}
                      descriptionText={`Don't have an account? `}
                      containerStyle={[padding.t_20, flex.justifyCenter]}
                      pressableTextStyle={[color.text_green, font.bold]}
                      onPress={() => navigation.navigate(CREATE_ACCOUNT_SCREEN)}
                    />
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </KeyboardView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})

export default LoginScreen
