import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Subject from './timeTableScreens/Subject';
import Exam from './timeTableScreens/Exam';

const Tab = createMaterialTopTabNavigator();

function TimeTableTab() {
  return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor:'#009387',
        inactiveTintColor:'#000'
      }}>
        <Tab.Screen name="subject Time Table" component={Subject}
        />
        <Tab.Screen name="Exam Time Table" component={Exam} />
      </Tab.Navigator>
  );
}

export default TimeTableTab;