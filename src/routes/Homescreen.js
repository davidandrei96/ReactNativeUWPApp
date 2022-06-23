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
  TextInput,
  NativeModules

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
  const Homescreen: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [hpDrivers, getHpDriver] = useState('');
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
  
    const getHpDrivers = async() => {
      var result = await NativeModules.ReactNativeReaderModule.getHPDrivers()
      return getHpDriver(result);
    };
  
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
            <Section  title="HP Drivers">
              {hpDrivers}   
            </Section>
            <Section title="HP Devices">
              {hpDevices}
            </Section>
            <Button title='Load HP Drivers' color="#cccfff"  onPress={() => { getHpDrivers() }}></Button>
            <Button title='Load HP Devices' color="#c244ff"  onPress={() => { getHpDevices(); }}></Button>
            <Button title='Go to HP Driver' color="#ff54ff"  onPress={() => {navigation.navigate('Details') }}></Button>
          </View>
  
        </ScrollView>
      </SafeAreaView>
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
  
  export default Homescreen;
