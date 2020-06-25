import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export function Fees (props){

        return(
            <View style={{ flex: 1 }}>  
            {/* <StatusBar translucent backgroundColor="transparent" /> */}
                <Card style={{ backgroundColor: '#009387', height: hp('106%'),}}>
                    <View style={{margin: 15  }}>
                    <TouchableOpacity 
                        onPress={()=> { props.navigation.goBack()}}>
                        <Icon name="arrow-circle-left" size={40} color="#fff"/>
                    </TouchableOpacity>
                    </View>
                    <View 
                        style={styls.container}>
                        <Card 
                            style={styls.cardStyle}>

                                    <View style={{ margin: 30 }}>
                                        <Icon name="rupee" size={50} color="#023e8a" />
                                    </View>

                                    <View style={{ flexDirection: 'row', marginStart: 30 }}>
                                        <Icon name="rupee" size={18} color="#000" />
                                        <Text style={{ fontSize: 16, }}> 5000 </Text>
                                    </View>

                                    <View style={{ margin: 25 }}> 
                                        <Text> Expense </Text>
                                    </View>
                        </Card>
                        <Card 
                            style={styls.cardStyle2}>

                                    <View style={{ margin: 30 }}>
                                        <Icon name="university" size={50} color="#023e8a" />
                                    </View>

                                    <View style={{ flexDirection: 'row', marginStart: 30 }}>
                                        <Icon name="rupee" size={18} color="#000" />
                                        <Text style={{ fontSize: 16, }}> 15000 </Text>
                                    </View>

                                    <View style={{ marginStart: 25, marginTop: 25 }}> 
                                        <Text> Spend to Goals </Text>
                                    </View>

                        </Card>
                    </View>

                        <View style={{ alignItems:'center' }}>
                            <TouchableOpacity 
                                style={styls.payButtonStyle}>
                                <Text style={{  textAlign:'center', fontSize: 16, margin: 10 }}> Pay Now </Text>
                            </TouchableOpacity>
                        </View>

                        <Card style={{ backgroundColor: '#ecf0f1',height: hp('55%'), 
                            borderTopRightRadius: 50,
                            borderTopLeftRadius: 50,
                            }}>
                            <View style={{}}>
                                <View style={{ flexDirection: 'row', 
                                    marginTop: '10%',
                                    justifyContent:'space-around'
                                    }}>
                                    <Text style={{ fontSize: 20 }}>
                                        Transactions 
                                    </Text>
                                    <TouchableOpacity 
                                        style={{
                                            width: wp('20%'), 
                                            height: hp('4%'),
                                            backgroundColor: '#fff',
                                            borderRadius: 20,
                                            marginStart: '25%',
                                        }}>
                                        <Text style={{ textAlign:'center', fontSize: 16, margin: 7, color: 'blue' }}> 
                                            See All 
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                    <View>
                                        <View style={{ 
                                            flexDirection: 'row',
                                            justifyContent:'space-around',
                                            marginTop: '8%'
                                            }}> 
                                            <Icon name="car" size={30} color="#000" />
                                            <View style={{ }}>
                                                <Text>
                                                    Car Purches
                                                </Text>
                                                <Text>Loan</Text>
                                            </View>
                                                <Text>
                                                    -$250
                                                </Text>
                                        </View>

                                        <View style={{ 
                                            flexDirection: 'row',
                                            justifyContent:'space-around',
                                            marginTop: '8%'
                                            }}> 
                                            <Icon name="home" size={30} color="#000" />
                                            <View style={{ }}>
                                                <Text>
                                                    Home Purches
                                                </Text>
                                                <Text>Loan</Text>
                                            </View>
                                                <Text>
                                                    -$250
                                                </Text>
                                        </View>

                                        <View style={{ 
                                            flexDirection: 'row',
                                            justifyContent:'space-around',
                                            marginTop: '8%'
                                            }}> 
                                            <Icon name="gift" size={30} color="#000" />
                                            <View style={{ }}>
                                                <Text>
                                                    Gift Shop
                                                </Text>
                                                <Text>Loan</Text>
                                            </View>
                                                <Text>
                                                    -$250
                                                </Text>
                                        </View>

                                        <View style={{ 
                                            flexDirection: 'row',
                                            justifyContent:'space-around',
                                            marginTop: '8%'
                                            }}> 
                                            <Icon name="shopping-cart" size={25} color="#000" />
                                            <View style={{ }}>
                                                <Text>
                                                    Shopping
                                                </Text>
                                                <Text>Loan</Text>
                                            </View>
                                                <Text>
                                                    -$250
                                                </Text>
                                        </View>

                                        <View style={{ 
                                            flexDirection: 'row',
                                            justifyContent:'space-around',
                                            marginTop: '8%'
                                            }}> 
                                            <Icon name="shopping-cart" size={25} color="#000" />
                                            <View style={{ }}>
                                                <Text>
                                                    Shopping
                                                </Text>
                                                <Text>Loan</Text>
                                            </View>
                                                <Text>
                                                    -$250
                                                </Text>
                                        </View>
                                    </View>

                            </View>
                        </Card>
                </Card>

            </View>
        );
    }

const styls = StyleSheet.create ({
    container:{
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        flex: 1 , 
    },
    cardStyle:{
        backgroundColor: '#90e0ef', 
        height: hp('25%'),
        width: wp('35%'),
        borderRadius: 10,
    },
    cardStyle2:{
        backgroundColor: '#eddcd2', 
        height: hp('25%'),
        width: wp('35%'),
        borderRadius: 10,
    },
    payButtonStyle:{
        width: wp('25%'), 
        height: hp('5%'),
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 20,
    }
});

export default Fees;