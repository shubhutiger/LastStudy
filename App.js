/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
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

  import { ActivityIndicator, Colors} from 'react-native-paper';
 import Video from 'react-native-video';

  import AsyncStorage from '@react-native-community/async-storage';


import MainTabScreen from './screens/MainTabScreen';
import ProfileScreen from './screens/Profile';
import FeesScreen from './screens/Fees';
import LibraryScreen from './screens/Library';
import AttendanceScreen from './screens/Attendance';
import GlobalTestScreen from './screens/GlobalTest';
import TimeTableScreen from './screens/TimeTableTab';

import { DrawerContent } from './screens/DrawerContent';

import RootStackScreen from './screens/RootStackScreen';
// import { View } from 'react-native-animatable';


import { AuthContext } from './components/context'; 

import ChatScreen from './screens/ChatScreen';
import Splash from './screens/Splash';


// import Net from './NetInfo';

const Drawer = createDrawerNavigator();
 

const App = () => {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

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


  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null

  };

  const loginReducer = (prevState, action) => {
    switch( action.type ){
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };

      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };

      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
      
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      
    }
  };


  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async(userName, password)=>{
      // setUserToken('Abcd');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if( userName == 'user' && password == 'pass') {
        try{
          userToken = 'Abcd';
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e){
          console.log(e);
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken});
    },

    signOut: async()=>{

      try{
        userToken = 'Abcd';
        await AsyncStorage.removeItem('userToken')
      } catch(e){
        console.log(e);
      }
      dispatch({ type: 'LOGOUT'});
    },
    signUp: ()=>{
      // setUserToken('Abcd');
      // setIsLoading(false);
    },
    toggleTheme: ()=>{
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    } 
  }));

  useEffect(()=>{
    setTimeout(async()=>{
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e){
        console.log(e);
      }
      dispatch({ type: 'RETRIVE_TOKEN', token: userToken}); 
    },1000);
  }, []);


  if( loginState.isLoading )
  {
    return(
      // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        // <ActivityIndicator size="large" animating={true} color={Colors.orange600} /> 
        // <Video style={{flex:1, justifyContent:'center', alignItems:'center'}} source={require('./src/sp.mp4')} />
        
      // </View>
      // <ImageBackground style={{flex:1}} source={require('./src/img/123.png')}>

      // </ImageBackground>
      <Video style={{flex:1, justifyContent:'center', alignItems:'center'}} source={require('./src/sp.mp4')} />
    );

  
  }


  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      { loginState.userToken != null ? (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Fees" component={FeesScreen} />
        <Drawer.Screen name="Library" component={LibraryScreen} />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
        <Drawer.Screen name="Attendance" component={AttendanceScreen} />
        <Drawer.Screen name="GlobalTest" component={GlobalTestScreen} />
        <Drawer.Screen name="TimeTableTab" component={TimeTableScreen} />
        <Drawer.Screen name="Sp" component={Splash} />
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