import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Assignment from './assignmentScreens/Assignment';
import CompleteA from './assignmentScreens/CompleteA';

const Tab = createMaterialTopTabNavigator();

function AssignmentTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="All" component={Assignment} />
        <Tab.Screen name="Completed" component={CompleteA} />
      </Tab.Navigator>
  );
}

export default AssignmentTab;