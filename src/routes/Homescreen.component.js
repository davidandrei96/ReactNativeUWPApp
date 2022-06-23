import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


function Homescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <Text>Home Screen</Text>
      <Button title='Go to HP Devices' color="#ff54ff"  onPress={() => {navigation.push('HPDevices') }}></Button>
      <Button title='Go to HP Driver' color="#ff54ff"  onPress={() => {navigation.push('HPDrivers') }}></Button>
    </View>
  );
}
  
  export default Homescreen;
