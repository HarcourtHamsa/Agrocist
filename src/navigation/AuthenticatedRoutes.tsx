import React, {useEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Routes from './constant'
import HomeScreen from 'screens/authenticated/tabs/Home/HomeScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabBar from './TabBar'
import UserProfile from 'screens/authenticated/Profile/UserProfile'
import {requestNotificationUserPermission} from 'services/Notification'
import Diagnosis from 'screens/authenticated/tabs/Diagnosis/Diagnosis'
import Community from 'screens/authenticated/tabs/Community/Community'
import DeliverySearch from 'screens/authenticated/tabs/Home/Store/DeliverySearch'
import FindDelivery from 'screens/authenticated/tabs/Home/Store/FindDelivery'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.HOME_SCREEN}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={Routes.DIAGNOSIS_SCREEN} component={Diagnosis} />
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
      screenOptions={{headerShown: false}}>
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
