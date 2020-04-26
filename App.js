import React from 'react';
import dva from 'dva';
import {createMemoryHistory} from 'history';
import {Provider} from '@ant-design/react-native';
import {globalErrorHandler} from './src/utils/errorHandlers';
import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native';

//create a dva app instance
const app = dva({
  history: createMemoryHistory(), //history object (reqd)
  onError(e, dispatch) {
    globalErrorHandler(e, dispatch); //global error handler
  },
});

app.model(require('./src/models/authentication').default);
//register app router to navigate between views
app.router(() => (
  <Provider>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </Provider>
));

//start the app instance and export it to be rendered
export default app.start();
