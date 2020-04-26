import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../scene/app/home';
import Login from '../scene/auth/login';
import {connect} from 'dva';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  console.log(!user);
  if (!user) {
    return <Auth />;
  }

  return <App />;
};

export default Router;
