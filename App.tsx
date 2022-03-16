import React, {useEffect, useState} from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {useSelector} from 'react-redux'
import AuthenticatedRoutes from './src/navigation/AuthenticatedRoutes'
import PublicRoutes from './src/navigation/PublicRoutes'
import SplashScreen from 'react-native-splash-screen'

const App: React.FC = () => {
  const isLoggedIn: boolean = useSelector((state: any) => state.user.loggedIn)

  useEffect(() => SplashScreen.hide(), [])

  return (
    <SafeAreaProvider>
      {isLoggedIn ? <AuthenticatedRoutes /> : <PublicRoutes />}
    </SafeAreaProvider>
  )
}

export default App
