import AppbarWithImage from 'components/AppbarWithImage'
import CustomButton from 'components/CustomButton'
import CustomText from 'components/CustomText'
import FormInput from 'components/FormInput'
import KeyboardView from 'components/KeyboardView'
import {IComponent} from 'interface/IComponent'
import {MOBILE_REG_SCREEN} from 'navigation/constant'
import React, {useState} from 'react'
import {SafeAreaView, ScrollView, View, Image, Pressable} from 'react-native'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {height, width, padding, margin} from 'styles/spacing'
import {checked_checkbox, unchecked_checkbox} from 'utils/images/list'
import {Formik} from 'formik'
import {createAccountValues} from 'utils/input/initialValues'
import {create_account_validation} from 'utils/input/validation'

const CreateAccount = ({navigation}: IComponent) => {
  const [termsChecked, setTermsChecked] = useState(false)

  const handleSignUp = (values: any) => {
    try {
      if (termsChecked === false) return
      navigation.navigate(MOBILE_REG_SCREEN, {payload: values})
    } catch (error) {
      console.log({error})
    }
  }

  return (
    <SafeAreaView style={[flex.flex_1, background.white, height.min_full]}>
      <KeyboardView>
        <ScrollView
          keyboardShouldPersistTaps='always'
          contentContainerStyle={[flex.grow_1]}>
          <View style={[]}>
            <AppbarWithImage
              navigation={navigation}
              text_1={`Create`}
              text_2={`Account`}
            />
            <Formik
              initialValues={createAccountValues}
              validationSchema={create_account_validation}
              onSubmit={values => handleSignUp(values)}>
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
                    placeholder={`Business / Individual Name`}
                    value={values.business_individual_name}
                    onChangeText={handleChange('business_individual_name')}
                    onBlur={handleBlur('business_individual_name')}
                    touched={touched.business_individual_name}
                    error={errors.business_individual_name}
                  />
                  <FormInput
                    placeholder={`Email`}
                    value={values.email}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    touched={touched.email}
                    error={errors.email}
                  />
                  <FormInput
                    placeholder='PIN'
                    keyboardType='numeric'
                    value={values.password}
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    touched={touched.password}
                    error={errors.password}
                  />
                  <FormInput
                    placeholder='Confirm PIN'
                    keyboardType='numeric'
                    value={values.confirm_password}
                    secureTextEntry={true}
                    onChangeText={handleChange('confirm_password')}
                    onBlur={handleBlur('confirm_password')}
                    touched={touched.confirm_password}
                    error={errors.confirm_password}
                  />

                  <Pressable
                    onPress={() => setTermsChecked(prevState => !prevState)}
                    style={[
                      flex.row,
                      flex.alignCenter,
                      width.full,
                      padding.t_10,
                    ]}>
                    <Image
                      resizeMode={'contain'}
                      source={
                        termsChecked ? checked_checkbox : unchecked_checkbox
                      }
                      style={[width[14], height[14], margin.r_5]}
                    />
                    <CustomText
                      left
                      text={`I accept the terms and conditions`}
                    />
                  </Pressable>
                  <CustomButton
                    disabled={!isValid || !termsChecked}
                    title={`Sign Up`}
                    onPress={handleSubmit}
                    containerStyle={margin.t_40}
                  />
                  <CustomButton
                    title={`Keep Going`}
                    onPress={() =>
                      navigation.navigate(MOBILE_REG_SCREEN, {payload: {}})
                    }
                  />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardView>
    </SafeAreaView>
  )
}

export default CreateAccount
