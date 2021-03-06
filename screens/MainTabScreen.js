import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
//import One from './One';
import Two from './Two';
import AssignmentTab from './AssignmentTab';
import ChatRoom from './ChatRoom';


const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
const TwoStack = createStackNavigator();
const ChatStack = createStackNavigator();
const FourStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>(
<Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Two"
        component={TwoStackScreen}
        options={{
          tabBarLabel: 'Live Class',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="md-videocam" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarLabel: 'Chat Room',
          tabBarColor : '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="md-chatbubbles" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AssignmentTab"
        component={FourStackScreen}
        options={{
          tabBarLabel: 'Assignment',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="md-book" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;


const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Dashboard',
      headerLeft: () => (
        <Icon.Button name="md-menu" size={25}
        backgroundColor="#009387" onPress={() => {navigation.openDrawer()}}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="md-notifications" size={25}
        backgroundColor="#009387" onPress={()=>navigation.navigate('DetailsScreen')}></Icon.Button>
      )
    }}/>

  </HomeStack.Navigator>
);

// 

const TwoStackScreen = ({navigation}) =>(
  <TwoStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <TwoStack.Screen name="Live Class" component={Two} options={{
      headerLeft: () => (
        <Icon.Button name="md-menu" size={25}
        backgroundColor="#009387" onPress={() => {navigation.openDrawer()}}></Icon.Button>
      )
    }}/>

  </TwoStack.Navigator>
);

// 

const ChatStackScreen = ({navigation}) =>(
    <ChatStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      <ChatStack.Screen name="Chat Room" component={ChatRoom} options={{
        headerLeft: () => (
          <Icon.Button name="md-menu" size={25}
          backgroundColor="#009387" onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
  
    </ChatStack.Navigator>
  );

//   

const FourStackScreen = ({navigation}) =>(
    <FourStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      <FourStack.Screen name="Assignment" component={AssignmentTab} options={{
        headerLeft: () => (
          <Icon.Button name="md-menu" size={25}
          backgroundColor="#009387" onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
  
    </FourStack.Navigator>
  );
