import React, {useState} from 'react'
import {IComponent} from 'interface/IComponent'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {flex} from 'styles/layout'
import {padding, margin} from 'styles/spacing'
import {loadingAndErrorDefault} from 'utils/data/defaults'
import * as Helpers from 'utils/display'
import {UPDATE_PASSWORD} from 'utils/api/constant'
import {IResponse} from 'interface/Request'
import networkRequest from 'utils/api/networkRequest'
import Appbar from 'components/Appbar'
import CustomButton from 'components/CustomButton'
import FormInput from 'components/FormInput'
import KeyboardView from 'components/KeyboardView'

const ChangePassword = ({navigation}: IComponent) => {
  const [changePasswordForm, setChangePasswordForm] = useState({
    currentPassword: {value: '', error: ''},
    newPassword: {value: '', error: ''},
    confirmPassword: {value: '', error: ''},
  })
  const [loadingAndError, setLoadingAndError] = useState(loadingAndErrorDefault)

  const handleTextInput = (value: string, key: string): void => {
    setChangePasswordForm((oldState: any) => ({
      ...oldState,
      [key]: {...oldState[key], value},
    }))
  }

  const displayMessageAndExit = (message: string) => {
    Helpers.stopLoader(setLoadingAndError)
    return Helpers.displayToastMessage(message)
  }

  const handlePasswordChange = async () => {
    try {
      //UPDATE_PASSWORD
      Helpers.startLoader(setLoadingAndError)
      const old_password = changePasswordForm.currentPassword.value
      const new_password = changePasswordForm.newPassword.value
      const confirm_password = changePasswordForm.confirmPassword.value

      if (!old_password || old_password.length < 6) {
        return displayMessageAndExit(`Please input old password`)
      } else if (new_password.length < 6) {
        return displayMessageAndExit(`Password must be at least 6 characters`)
      } else if (new_password !== confirm_password) {
        return displayMessageAndExit(`Password do not match`)
      }

      const model = {old_password, new_password}
      const response: IResponse = await networkRequest.post(
        UPDATE_PASSWORD,
        model,
      )
      console.log({response})
      if (response?.status && response.data) {
        // TODO: am i to call token signin also
        Helpers.displayToastMessage(`Password Changed successfully`)
        navigation.goBack()
        return
      }
      Helpers.catchHelper(
        setLoadingAndError,
        response,
        'Change Password failed',
      )
    } catch (error) {
      Helpers.catchHelper(setLoadingAndError, error, 'Network Error')
    }
  }

  return (
    <SafeAreaView style={[flex.flex_1]}>
      <Appbar
        back={true}
        navigation={navigation}
        title={`Change Password`}
        inLineBar={true}
      />
      <KeyboardView>
        <ScrollView
          style={flex.flex_1}
          contentContainerStyle={[flex.grow_1, padding.t_20]}>
          <FormInput
            placeholder={'Current Password'}
            value={changePasswordForm.currentPassword.value}
            error={changePasswordForm.currentPassword.error}
            onChangeText={(text: string) =>
              handleTextInput(text, 'currentPassword')
            }
          />
          <FormInput
            placeholder={'New Password'}
            value={changePasswordForm.newPassword.value}
            error={changePasswordForm.newPassword.error}
            onChangeText={(text: string) =>
              handleTextInput(text, 'newPassword')
            }
          />
          <FormInput
            placeholder={'Confirm new Password'}
            value={changePasswordForm.confirmPassword.value}
            error={changePasswordForm.confirmPassword.error}
            onChangeText={(text: string) =>
              handleTextInput(text, 'confirmPassword')
            }
          />

          <CustomButton
            title={'Confirm'}
            loading={loadingAndError.loading}
            onPress={handlePasswordChange}
            containerStyle={[margin.t_10]}
          />
        </ScrollView>
      </KeyboardView>
    </SafeAreaView>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})
