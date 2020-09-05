import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button,
    Image,
    Platform,
    TouchableOpacity,
    TextInput,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../components/context';


const SignUnScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    const textInputChange = (val) => {
        if (val.length >= 1) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handelPasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handelconfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry

        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry

        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barstyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                
                <Text style={[styles.text_footer, { marginTop: 10 }]}>Email</Text>
                <View style={styles.action}>
                    <Icon name="md-mail" size={20} />
                    <TextInput
                        placeholder='Your Email Id'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation='bounceIn'
                        >
                            <Icon
                                name="md-checkmark-circle"
                                size={20}
                                color="green"
                            />
                        </Animatable.View>

                        : null}
                </View>
                
                <Text style={[styles.text_footer, {
                    marginTop: 10
                }]}>Password</Text>
                <View style={styles.action}>
                    <Icon name="md-key" size={25} />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handelPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Icon
                                name="md-eye-off"
                                size={25}
                                color="grey"
                            />
                            :
                            <Icon
                                name="md-eye"
                                size={25}
                                color="grey"
                            />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 10
                }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Icon name="md-key" size={25} />
                    <TextInput
                        placeholder='Confirm Your Password'
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handelconfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ?
                            <Icon
                                name="md-eye-off"
                                size={25}
                                color="grey"
                            />
                            :
                            <Icon
                                name="md-eye"
                                size={25}
                                color="grey"
                            />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={{color: 'green', fontWeight: 'bold'}}>By Signing Up you agree to our Terms of Service and Privacy Policy</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.button}>
                        <Text  style={{fontWeight:'bold',fontSize:17,color:'#fff'}}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>navigation.goBack()}
                        style={[styles.signIn,{
                            borderColor: '#009387',
                            borderWidth : 1,
                            marginTop: 50,
                            marginLeft:10
                        }]}
                    >
                        <Text style={{fontWeight:'bold',fontSize:17}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignUnScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: '#08d4c4',
        padding: 10,
        width: '45%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signIn: {
        width: '45%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});