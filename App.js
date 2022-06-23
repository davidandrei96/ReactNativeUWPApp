/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HPDevices from './src/routes/HPDevices.component'
import HPDrivers from './src/routes/HPDrivers.component'
import Homescreen from './src/routes/Homescreen.component'

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='HPDrivers'>
        <Stack.Screen name='Homescreen'  component={Homescreen} />
          <Stack.Screen name='HPDrivers' component={HPDrivers} />
          <Stack.Screen name='HPDevices' component={HPDevices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
