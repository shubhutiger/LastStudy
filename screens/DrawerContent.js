import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../components/context';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Profile';
import Fees from './Fees';
import Library from './Library';
import Attendance from './Attendance';
import GlobalTest from './GlobalTest';
import TimeTableTab from './TimeTableTab';


export function DrawerContent (props){

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);
    
    return(
        <View style={{flex:1}}>
            
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        {/* Profile Image and Name */}
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../src/img/avatar.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Akash Sonawane</Title>
                                <Caption style={styles.caption}>@Akash7359</Caption>
                            </View>
                        </View> 
                        {/* End Of Profile Image And Name */}
                    </View>

                    {/* Drower Itams */}
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) =>  (
                                <Icon
                                name="md-person"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={ () => {props.navigation.navigate(Profile)}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>  (
                                <Icon
                                name="md-calendar"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Attendance"
                            onPress={ () => {props.navigation.navigate(Attendance)}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>  (
                                <Icon
                                name="md-cash"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Fees"
                            onPress={ () => {props.navigation.navigate(Fees)}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>  (
                                <Icon
                                name="md-today"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Time Table"
                            onPress={ () => {props.navigation.navigate(TimeTableTab)}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>  (
                                <Icon
                                name="md-easel"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Notice Board"
                            onPress={ () => {}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>  (
                                <Icon
                                name="md-school"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Library"
                            onPress={ () => {props.navigation.navigate(Library)}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>  (
                                <Icon
                                name="md-document"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Online Test"
                            onPress={ () => {}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>  (
                                <Icon
                                name="md-ribbon"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Global Test"
                            onPress={ () => {props.navigation.navigate(GlobalTest)}}
                        />

                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) =>  (
                        <Icon
                        name="md-log-out"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={ () => {signOut()}}
                />

            </Drawer.Section>
        </View>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });