import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Routes from './constant'
import HomeScreen from 'screens/authenticated/tabs/Home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './TabBar'
import UserProfile from 'screens/authenticated/Profile/UserProfile'
import { requestNotificationUserPermission } from 'services/Notification'
import Diagnosis from 'screens/authenticated/tabs/Diagnosis/Diagnosis'
import Community from 'screens/authenticated/tabs/Community/Community'
import DeliverySearch from 'screens/authenticated/tabs/Home/Store/DeliverySearch'
import FindDelivery from 'screens/authenticated/tabs/Home/Store/FindDelivery'

// new code
import Preview from 'screens/authenticated/tabs/Diagnosis/Preview'
import Diagnose from 'screens/authenticated/tabs/Diagnosis/Diagnose'


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// new code here
const DiagnosisStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.DIAGNOSIS_SCREEN}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Diag"} component={Diagnosis} />
      <Stack.Screen name={Routes.DIAGNOSIS_PREVIEW_SCREEN} component={Preview} />
      <Stack.Screen name={Routes.DIAGNOSE_SCREEN} component={Diagnose} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes.HOME_SCREEN}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={Routes.DIAGNOSIS_SCREEN} component={DiagnosisStack} />
      <Tab.Screen name={Routes.COMMUNITY_SCREEN} component={Community} />
    </Tab.Navigator>
  )
}

const AuthenticatedRoutes = () => {
  useEffect(() => {
    requestNotificationUserPermission()
  }, [])

  return (
    <Stack.Navigator
      initialRouteName={Routes.TAB}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.TAB} component={TabNavigator} />
      <Stack.Screen
        name={Routes.DELIVERY_SEARCH_SCREEN}
        component={DeliverySearch}
      />
      <Stack.Screen
        name={Routes.FIND_DELIVERY_SCREEN}
        component={FindDelivery}
      />
      <Stack.Screen name={Routes.USER_PROFILE_SCREEN} component={UserProfile} />
    </Stack.Navigator>
  )
}

export default AuthenticatedRoutes
