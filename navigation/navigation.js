import * as React from 'react';
import OnBoarding from '../screens/onBoarding/OnBoarding';
import GetStarted from '../screens/onBoarding/GetStarted';
import StayConnected from '../screens/onBoarding/StayConnected';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

  export default  function MyStack() {
    return (
     
        <Stack.Navigator
        screenOptions={{
       
            headerShown:false 
          }}>
          
          <Stack.Screen name="OnBoarding" component={OnBoarding}  />
          <Stack.Screen name="GetStarted" component={GetStarted}  />
          <Stack.Screen name="StayConnected" component={StayConnected}  />
        </Stack.Navigator>
      
    );
  }