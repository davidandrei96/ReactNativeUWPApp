import * as React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   useColorScheme,
   View,
   Button,
   NativeModules
 } from 'react-native';
 
 import {
   Colors,
   Header,
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
          onPress={() => navigation.push('Home')}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  export default HPDevices;
  