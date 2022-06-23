import * as React from 'react';
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
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 const HpDrivers : () => Node = () => {
   
        return(
            <View style = {styles.container}>
                <Text>Hello From HpDrivers</Text>
            </View>
        )
    
 }


 
  
 

   export default HpDrivers;
