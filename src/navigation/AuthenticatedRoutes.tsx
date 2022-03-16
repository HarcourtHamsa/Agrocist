import React, {useEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Routes from './constant'
import HomeScreen from 'screens/authenticated/tabs/Home/HomeScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Settings from 'screens/authenticated/tabs/Settings/Settings'
import TabBar from './TabBar'
import UserProfile from 'screens/authenticated/Profile/UserProfile'
import {requestNotificationUserPermission} from 'services/Notification'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.HOME_SCREEN}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={Routes.SETTING_SCREEN} component={Settings} />
    </Tab.Navigator>
  )
}

const AuthenticatedRoutes = () => {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    requestNotificationUserPermission()
  }, [])

  return (
    <Stack.Navigator
      initialRouteName={Routes.TAB}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.TAB} component={TabNavigator} />
      <Stack.Screen name={Routes.USER_PROFILE_SCREEN} component={UserProfile} />
    </Stack.Navigator>
  )
}

export default AuthenticatedRoutes
