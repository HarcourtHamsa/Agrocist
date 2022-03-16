import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReduxThunk from 'redux-thunk';
import userReducer from './reducer/user';
import appReducer from './reducer/app';

const middlewares = [ReduxThunk];

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return {store, persistor};
};
