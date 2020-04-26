import React from 'react';
import {Text, View, Button} from 'react-native';
import ForegroundService from '@supersami/react-native-foreground-service';
import { Logout } from '_utils/Firebase/authentication';

const Home = () => {
  let obj = {routeName: 'mainActivity', routeParams: {data: ''}};
  let obj1 = {routeName: 'mainActivity 1', routeParams: {data: ''}};

  let notificationConfig = {
    id: 434,
    title: 'SuperService',
    message: `I hope you are doing your `,
    vibration: false,
    visibility: 'public',
    icon: 'ic_launcher',
    importance: 'max',
    number: String(1),
    button: false,
    buttonText: 'Checking why are you repeating your self',
    buttonOnPress: JSON.stringify(obj),
    mainOnPress: JSON.stringify(obj1),
  };
  // Above is the notification config

  const start = async () => {
    await ForegroundService.startService(notificationConfig);

    await ForegroundService.runTask({
      taskName: 'myTaskName',
      delay: 0,
      loopDelay: 5000,
      onLoop: false,
    });
  };

  const check = async () => {
    await ForegroundService.isRunning().then(res=>{
      console.log("Yes",res)
    }).catch(()=>{
      console.log("No")
    })
  }
  check()
  return (
    <View>
      <Text>Home</Text>
      <Button title={'Start Foreground Service'} onPress={() => start()} />
      <Button title={'Stop Foreground Service'} onPress={async () => {await  ForegroundService.stopService()}} />
      <Button
        title={'Logout'}
        onPress={() =>{Logout()}
        }
      />
    </View>
  );
};

export default Home;
