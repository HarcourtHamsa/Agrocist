import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from 'screens/public/LoginScreen'
import * as Routes from './constant'
import CreateAccount from 'screens/public/CreateAccount'
import MobileRegistration from 'screens/public/MobileRegistration'
import VerificationOTP from 'screens/public/VerificationOTP'
import Success from 'screens/public/Success'
import ResetPIN from 'screens/public/ResetPIN'
import CreatePIN from 'screens/public/CreatePIN'
import Specialty from 'screens/public/Specialty'
import AppIntro from 'screens/public/AppIntro'

const Stack = createNativeStackNavigator()

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.INTRO_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.INTRO_SCREEN} component={AppIntro} />
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={Routes.CREATE_ACCOUNT_SCREEN}
        component={CreateAccount}
      />
      <Stack.Screen
        name={Routes.MOBILE_REG_SCREEN}
        component={MobileRegistration}
      />
      <Stack.Screen
        name={Routes.MOBILE_OTP_SCREEN}
        component={VerificationOTP}
      />
      <Stack.Screen name={Routes.SUCCESS_SCREEN} component={Success} />
      <Stack.Screen name={Routes.RESET_PIN_SCREEN} component={ResetPIN} />
      <Stack.Screen name={Routes.CREATE_PIN_SCREEN} component={CreatePIN} />
      <Stack.Screen name={Routes.SPECIALTY_SCREEN} component={Specialty} />
    </Stack.Navigator>
  )
}

export default PublicRoutes
