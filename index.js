import 'react-native-gesture-handler'
import React from 'react'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import configureStore from './src/store/configureStore'
import Loader from './src/components/Loader'
import {NavigationContainer} from '@react-navigation/native'

const {store, persistor} = configureStore()

const Setup = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader centralize />} persistor={persistor}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Setup)
