import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Platform,
    TouchableOpacity,
    StatusBar,
    TextInput,
    ScrollView
} from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card } from 'react-native-shadow-cards';


const ChatScreen = ({ navigation }) => {

    const { colors } = useTheme();
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barstyle={theme.dark ? "light-content" : "dark-content"} />
            <Text style={[styles.text_header, { marginBottom: 30, marginTop: 50 }]}>Akash Sonawane</Text>

            {/*  */}
            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                <Text style={{paddingHorizontal: 62}}>10:30Pm</Text>
                <View style={{ flex: 0,
                    backgroundColor: '#D5D3D7',
                    borderRadius: 10, 
                    height: 50,
                    marginTop: 5,
                    justifyContent: 'center',
                    paddingHorizontal: 20, 
                    marginLeft:60}}
                    >
                    <Text style={{color:colors.text, fontSize: 15}}>Hi Baby</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Avatar.Image
                source={require('../src/img/avatar2.png')}
                size={50}
              />
                <View style={{ flex: 0,
                    backgroundColor: '#D5D3D7',
                    borderRadius: 10, 
                    height: 50,
                    justifyContent: 'center',
                    paddingHorizontal: 20,
                    marginTop: 10, 
                    width: '80%',
                    marginLeft:10}}
                    >
                    <Text style={{color:colors.text, fontSize: 15}}>What Are You Doing..?</Text>
                </View>
                </View>
                <Text style={{paddingHorizontal: 62, marginTop: 20}}>Now</Text>
                <View style={{ flex: 0,
                    backgroundColor: '#009387',
                    borderRadius: 10, 
                    height: 50,
                    marginTop: 5,
                    justifyContent: 'center',
                    paddingHorizontal: 20, 
                    marginLeft:60}}
                    >
                    <Text style={{color:colors.text, color: '#fff', fontSize: 15}}>Nothing Just Doing Time pass with my Chodu Friends</Text>
                </View>
                <View style={{ flex: 0 }}>
                <TextInput 
                        placeholder='Your Message'
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                </View>


            </Animatable.View>
        </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 10
    },
    footer: {
        flex: 3.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        paddingHorizontal: 20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    }
});
