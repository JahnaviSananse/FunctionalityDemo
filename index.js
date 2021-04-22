/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
// import App from './App';
import {Provider} from 'react-redux';

import Splash from './src/screens/auth/splash/splash';
import {name as appName} from './app.json';
import Root from './src/screens/root';
import configureStore from './src/redux/store';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
