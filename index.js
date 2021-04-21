/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Splash from './src/screens/auth/splash/splash';
import {name as appName} from './app.json';
import Root from './src/screens/root';

AppRegistry.registerComponent(appName, () => Root);
