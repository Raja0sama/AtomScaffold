/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ForegroundService from '@supersami/react-native-foreground-service';
let foregroundTask = async (data) => {
  await myTask();
};

const myTask = () => {
  let i = 0;
};
ForegroundService.registerForegroundTask('myTaskName', foregroundTask);

AppRegistry.registerComponent(appName, () => App);
