/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  NativeModules

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <Text>Home Screen</Text>
      <Button title='Go to HP Devices' color="#ff54ff"  onPress={() => {navigation.push('HPDevices') }}></Button>
      <Button title='Go to HP Driver' color="#ff54ff"  onPress={() => {navigation.push('HPDrivers') }}></Button>
    </View>
  );
}

function HPDrivers({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [hpDrivers, getHpDriver] = useState('');

  // useEffect(async () => {   // helpful for rendering immediately after component init
  //   getHpDevices();
  //   getHpDrivers();
  // }, []);


  // //create your forceUpdate hook
  // function useForceUpdate(){
  //   const [value, setValue] = useState(0); // integer state
  //   return () => setValue(value => value + 1); // update state to force render
  //   // An function that increment 👆🏻 the previous state like here 
  //   // is better than directly setting `value + 1`
  // }

 // const forceUpdate = useForceUpdate();

  const getHpDrivers = async() => {
    var result = await NativeModules.ReactNativeReaderModule.getHPDrivers()
    return getHpDriver(result);
  };

  return ( 
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
            //contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
          <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section  title="HP Drivers">
            {hpDrivers}   
          </Section>
          <Button title='Load HP Drivers' color="#cccfff"  onPress={() => { getHpDrivers() }}></Button>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}}>
        <Button
        title="Go back to Home"
        onPress={() => navigation.push('Home')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function HPDevices({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [hpDevices, getHpDevice] = useState('');
  // useEffect(async () => {   // helpful for rendering immediately after component init
  
  //   getHpDevices();
  //   getHpDrivers();

  // }, []);


  // //create your forceUpdate hook
  // function useForceUpdate(){
  //   const [value, setValue] = useState(0); // integer state
  //   return () => setValue(value => value + 1); // update state to force render
  //   // An function that increment 👆🏻 the previous state like here 
  //   // is better than directly setting `value + 1`
  // }

 // const forceUpdate = useForceUpdate();

  const getHpDevices = async() => {
    var result = await NativeModules.ReactNativeReaderModule.getHPDevices()
    return getHpDevice(result);
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        //contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="HP Devices">
            {hpDevices}
          </Section>
          <Button title='Load HP Devices' color="#c244ff"  onPress={() => { getHpDevices(); }}></Button>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}}>
        <Button
        title="Go back to Home"
        onPress={() => navigation.push('Home')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const Stack = createNativeStackNavigator();

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const App: () => Node = () => {
 
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home"  component={HomeScreen} />
          <Stack.Screen name="HPDrivers" component={HPDrivers} />
          <Stack.Screen name="HPDevices" component={HPDevices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
