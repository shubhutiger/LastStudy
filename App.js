/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme 
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
   Provider as PaperProvider ,
   DarkTheme as PaperDarkTheme,
   DefaultTheme as PaperDefaultTheme
  } from 'react-native-paper';

import MainTabScreen from './screens/MainTabScreen';
import ProfileScreen from './screens/Profile';
import FeesScreen from './screens/Fees';
import LibraryScreen from './screens/Library';
import { DrawerContent } from './screens/DrawerContent';

import RootStackScreen from './screens/RootStackScreen';
import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './components/context'; 

import ChatScreen from './screens/ChatScreen';

// import NetInfo from './NetInfo';

const Drawer = createDrawerNavigator();
 

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme ={
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme ={
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo(() => ({
    signIn: ()=>{
      setUserToken('Abcd');
      setIsLoading(false);
    },
    signOut: ()=>{
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: ()=>{
      setUserToken('Abcd');
      setIsLoading(false);
    },
    toggleTheme: ()=>{
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    } 
  }));

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  }, []);


  if( isLoading )
  {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }


  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      { userToken != null ? (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Fees" component={FeesScreen} />
        <Drawer.Screen name="Library" component={LibraryScreen} />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      </Drawer.Navigator>
      )
      :
      <RootStackScreen/>
      }
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  )
}
export default App;