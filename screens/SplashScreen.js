import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barstyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounce'
                    source={require('../src/img/123.png')}
                    style={styles.logo}
                    resizeMode= "center"
                />
            </View>
            <Animatable.View 
                style={styles.footer}
                animation='fadeInUpBig'
            >
                <Text style={styles.title}>Smart Way Of Education!</Text>
                <View style={{flexDirection:'row', marginTop: 10}}>
                <Image
                source={require('../src/img/sp.png')}
                style={styles.logo}
                resizeMode="contain"
                />
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignInScreen')}>
                    <Text style={{fontWeight:'bold',fontSize:17}}>Get Started</Text>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
    };

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: wp('60%'),
        height: hp('27%')
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'center',
        marginTop: 60,
        borderRadius:24,
        backgroundColor:'#08d4c4',
        width:wp('28%'),
        height:hp('6%'),
        padding:10

    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });
  