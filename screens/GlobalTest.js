import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import {useTheme} from '@react-navigation/native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const GlobalTest = ({navigation})  => {

    const {colors} = useTheme();
    const theme = useTheme();

    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar backgroundColor="#009387" barstyle={theme.dark ? "light-content" : "dark-content"} /> */}
        <Card style={{ 
            backgroundColor: '#009387',
            width:'100%',
            height:'50%',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            elevation: 20
            }}>

            <View style={{ marginStart: 15, marginTop: 10, width: '10%' }}>
              <TouchableOpacity onPress={()=> {navigation.goBack()}}>
                <Icon name="arrow-circle-left" size={40} color="#fff"/>
              </TouchableOpacity>
            </View>

                <Card style={{ 
                    width: '50%', 
                    height: '50%',
                    borderRadius: 100 ,
                    alignSelf:'center',
                    elevation: 50,
                    // alignItems:'center'
                    }}>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ textAlign:'center',fontSize: 20 }}>
                                {'Your Score'}
                            </Text>
                            <Text style={{ textAlign:'center', fontSize: 50 }}>
                                {'150pts'}
                            </Text>
                        </View>
                </Card>

            <Animatable.View animation='bounce'>
            <Card style={{
                backgroundColor: '#fff',
                width:'90%',
                height:'60%',
                borderRadius: 20,
                marginTop: '15%',
                alignSelf:'center',
                elevation: 20
                }}>

                    <View style={{  
                        flexDirection:'row', 
                        justifyContent: 'space-between', 
                        margin: 10
                         }}>
                            <View style={{ margin: 10 }} >
                                <Icon name="circle" size={10} color="lightblue" />
                            </View>
                            <View style={{ width: wp('45%'), height: hp('7%'),}}>
                                <Text style={{ fontSize: 16, color: '#000' }}>
                                    {'100%'}
                                </Text>
                                <Text style={{ marginTop: '1%', color: '#000' }}>
                                    {'Compitition'}
                                </Text>
                            </View>
                            <View style={{ margin: 10 }} >
                                <Icon name="circle" size={10} color="lightblue" />
                            </View>
                        <View style={{ width: wp('45%'), height: hp('7%'),}}>
                            <Text style={{ fontSize: 16, color: '#000' }}>
                                {'20'}
                            </Text>
                            <Text style={{ marginTop: '1%', color: '#000' }}>
                                {'Total Questions'}
                            </Text>
                        </View>
                    </View>
                    <View style={{  
                        flexDirection:'row', 
                        justifyContent: 'space-between', 
                        margin: 10 }}>
                             <View style={{ margin: 10 }} >
                                <Icon name="circle" size={10} color="lightblue" />
                            </View>
                        <View style={{ width: wp('45%'), height: hp('7%'),}}>
                            <Text style={{ fontSize: 16, color: '#000' }}>
                                {'13'}
                            </Text>
                            <Text style={{ marginTop: '1%', color: '#000' }}>
                                {'Correct'}
                            </Text>
                        </View>
                            <View style={{ margin: 10 }} >
                                <Icon name="circle" size={10} color="lightblue" />
                            </View>
                        <View style={{ width: wp('45%'), height: hp('7%'),}}>
                            <Text style={{ fontSize: 16, color: '#000' }}>
                                {'7'}
                            </Text>
                            <Text style={{ marginTop: '1%', color: '#000' }}>
                                {'wrong'}
                            </Text>
                        </View>
                    </View>
            </Card>
            </Animatable.View>
        </Card>

            <View style={{ 
                flexDirection: 'row', 
                // flex:1, 
                alignItems:'center',
                justifyContent:'space-around',  
                marginTop: '30%'
                }}>
                <View style={{ margin: 10 }} >
                    <TouchableOpacity onPress={()=>{}}>
                        <Icon name="circle" size={50} color="lightblue" />
                    </TouchableOpacity>
                    <Text style={{ textAlign:'center' }}>
                        abc
                    </Text>
                </View>
                <View style={{ margin: 10 }} >
                    <TouchableOpacity onPress={()=>{}}>
                        <Icon name="eye" size={50} color="lightblue" />
                    </TouchableOpacity>
                    <Text style={{ textAlign:'center' }}>
                        abc
                    </Text>
                </View>
                <View style={{ margin: 10 }} >
                    <TouchableOpacity onPress={()=>{}}>
                        <Icon name="share-alt" size={50} color="lightblue" />
                    </TouchableOpacity>
                    <Text style={{ textAlign:'center' }}>
                        abc
                    </Text>
                </View>
            </View>

            <View style={{ 
                flexDirection: 'row', 
                alignItems:'center', 
                justifyContent:'space-around',marginTop: '10%' }}>
                <View style={{ margin: 10 }} >
                    <TouchableOpacity onPress={()=>{}}>
                        <Icon name="bus" size={50} color="lightblue" />
                    </TouchableOpacity>
                    <Text style={{ textAlign:'center' }}>
                        abc
                    </Text>
                </View>
                <View style={{ margin: 10 }} >
                    <TouchableOpacity onPress={()=>{}}>
                        <Icon name="home" size={50} color="lightblue" />
                    </TouchableOpacity>
                    <Text style={{ textAlign:'center' }}>
                        abc
                    </Text>
                </View>
                <View style={{ margin: 10 }} >
                    <TouchableOpacity onPress={()=>{}}>
                        <Icon name="cogs" size={50} color="lightblue" />
                    </TouchableOpacity>
                    <Text style={{ textAlign:'center' }}>
                        abc
                    </Text>
                </View>
            </View>
          
      </View>
    );
  };

  export default GlobalTest;