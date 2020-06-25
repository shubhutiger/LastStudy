import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import {useTheme} from '@react-navigation/native';


const Four = ({navigation})  => {

    const {colors} = useTheme();
    const theme = useTheme();

    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar backgroundColor="#009387" barstyle={theme.dark ? "light-content" : "dark-content"} />
        <Text style={{color:colors.text}}>Four Screen </Text>
        {/* <Button
         onPress={() => navigation.navigate("Details")}
         title="Go to Details Screen"
        /> */}
          
      </View>
    );
  };

  export default Four;