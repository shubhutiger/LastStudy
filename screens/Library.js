import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Library extends Component {

    render(){
        const showAlert = () =>{
            Alert.alert(
            'You need to...'
            )
        }
        return(
            <Fragment>
                {/* <StatusBar translucent backgroundColor="transparent" /> */}
                <Card style={styles.curve}>

                    <View style={{ margin: 15, width: wp('10%') }}>
                        <TouchableOpacity onPress={()=> {this.props.navigation.goBack()}}>
                            <Icon name="arrow-circle-left" size={40} color="#fff"/>
                        </TouchableOpacity>
                    </View>

                    <View style={{ 
                        flexDirection: 'row',
                        justifyContent:'space-around',
                        alignItems:'center',
                        
                        }}> 
                            <View style={{ }}>
                                <Text style={{ fontSize: 20 }}>
                                    Cource Activity
                                </Text>
                                <Text>June 28th, 2020</Text>
                            </View>
                            <View style={{ }}>
                                <TouchableOpacity style={{  }}
                                onPress={()=>{}}>
                                    <Icon name="plus-square" size={50} color="blue" />
                                </TouchableOpacity>
                            </View>
                    </View>
                </Card>
                    
 {/* srocllview statt heremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}
                    <View 
                        style={{ 
                            flex: 1,marginTop: 1,
                            }}>
   
                        <ScrollView
                            contentContainerStyle={{ alignItems: 'center',
                            }}>
                                <View>
                                    <Card style={{
                                            backgroundColor: '#023e8a',
                                            width: wp('90%'),
                                            height: hp('20%'),
                                            borderRadius: 20,                   
                                        }}>
                                            <View 
                                                style={{  
                                                    flexDirection:'row', 
                                                    justifyContent: 'space-around', 
                                                    margin: 10 }}>
                                                    <Icon name="facebook" size={50} color="lightblue" />
                                                <View style={{ width: wp('45%'), height: hp('7%'),}}>
                                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                                        {'How to grow your facebook Page'}
                                                    </Text>
                                                    <Text style={{ marginTop: '5%', color: '#fff' }}>
                                                        June 28th, 2020
                                                    </Text>
                                                </View>
                                                <View 
                                                    style={{ 
                                                        width: wp('14%'), 
                                                        height: hp('6%'), 
                                                        backgroundColor: '#fff',
                                                        borderRadius: 10,
                                                        justifyContent:'center'
                                                        }}>
                                                    <Text style={{ alignSelf:'center', fontSize: 18,}}>{'12'}
                                                        <Text></Text>
                                                    </Text>
                                                </View>
                                            </View>
                                            <View 
                                                style={{ 
                                                    marginTop: '10%', 
                                                    width: wp ('30%'), 
                                                    marginStart: '10%',
                                                    }}>
                                                <TouchableOpacity 
                                                    style={{ 
                                                        borderColor: '#fff', 
                                                        borderWidth: 2, 
                                                        borderRadius: 10,
                                                        alignItems:'center',
                                                        height: hp('5%'), 
                                                        
                                                        }}>
                                                    <Text style={{ color: '#fff', fontSize: 25,}} > Press </Text> 
                                                </TouchableOpacity>
                                            </View> 
                                    </Card>
                                </View>

                                <View style={{
                                    marginTop: '5%'
                                    }}>
                                    <Card style={{
                                            backgroundColor: '#ffadad',
                                            width: wp('90%'),
                                            height: hp('20%'),
                                            borderRadius: 20,
                                                                    
                                        }}>
                                            <View 
                                                style={{  
                                                    flexDirection:'row', 
                                                    justifyContent: 'space-around', 
                                                    margin: 10 }}>
                                                    <Icon name="magnet" size={50} color="lightblue" />
                                                <View style={{ width: wp('45%'), height: hp('7%'),}}>
                                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                                        {' Grow your community'}
                                                    </Text>
                                                    <Text style={{ marginTop: '5%', color: '#fff' }}>
                                                        June 28th, 2020
                                                    </Text>
                                                </View>
                                                <View 
                                                    style={{ 
                                                        width: wp('14%'), 
                                                        height: hp('6%'), 
                                                        backgroundColor: '#fff',
                                                        borderRadius: 10,
                                                        justifyContent:'center'
                                                        }}>
                                                    <Text style={{ alignSelf:'center', fontSize: 18,}}>{'12'}
                                                        <Text></Text>
                                                    </Text>
                                                </View>
                                            </View>
                                            <View 
                                                style={{ 
                                                    marginTop: '10%', 
                                                    width: wp ('30%'), 
                                                    marginStart: '10%',
                                                    }}>
                                                <TouchableOpacity 
                                                    style={{ 
                                                        borderColor: '#fff', 
                                                        borderWidth: 2, 
                                                        borderRadius: 10,
                                                        alignItems:'center',
                                                        height: hp('5%'), 
                                                        
                                                        }}>
                                                    <Text style={{ color: '#fff', fontSize: 25,}} > Press </Text> 
                                                </TouchableOpacity>
                                            </View> 
                                    </Card>
                                </View>

                                <View style={{
                                    marginTop: '5%'
                                    }}>
                                    <Card style={{
                                            backgroundColor: '#ffe66d',
                                            width: wp('90%'),
                                            height: hp('20%'),
                                            borderRadius: 20,
                                                                    
                                        }}>
                                            <View 
                                                style={{  
                                                    flexDirection:'row', 
                                                    justifyContent: 'space-around', 
                                                    margin: 10 }}>
                                                    <Icon name="tv" size={50} color="lightblue" />
                                                <View style={{ width: wp('45%'), height: hp('7%'),}}>
                                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                                        {'Data science Bootcamp'}
                                                    </Text>
                                                    <Text style={{ marginTop: '5%', color: '#fff' }}>
                                                        June 28th, 2020
                                                    </Text>
                                                </View>
                                                <View 
                                                    style={{ 
                                                        width: wp('14%'), 
                                                        height: hp('6%'), 
                                                        backgroundColor: '#fff',
                                                        borderRadius: 10,
                                                        justifyContent:'center'
                                                        }}>
                                                    <Text style={{ alignSelf:'center', fontSize: 18,}}>{'12'}
                                                        <Text></Text>
                                                    </Text>
                                                </View>
                                            </View>
                                            <View 
                                                style={{ 
                                                    marginTop: '10%', 
                                                    width: wp ('30%'), 
                                                    marginStart: '10%',
                                                    }}>
                                                <TouchableOpacity 
                                                    style={{ 
                                                        borderColor: '#fff', 
                                                        borderWidth: 2, 
                                                        borderRadius: 10,
                                                        alignItems:'center',
                                                        height: hp('5%'), 
                                                        
                                                        }}>
                                                    <Text style={{ color: '#fff', fontSize: 25,}} > Press </Text> 
                                                </TouchableOpacity>
                                            </View> 
                                    </Card>
                                </View>

                                <View style={{
                                    marginTop: '5%'
                                    }}>
                                    <Card style={{
                                            backgroundColor: '#ff70a6',
                                            width: wp('90%'),
                                            height: hp('20%'),
                                            borderRadius: 20,
                                                                    
                                        }}>
                                            <View 
                                                style={{  
                                                    flexDirection:'row', 
                                                    justifyContent: 'space-around', 
                                                    margin: 10 }}>
                                                    <Icon name="bullseye" size={50} color="lightblue" />
                                                <View style={{ width: wp('45%'), height: hp('7%'),}}>
                                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                                        {'target audience training'}
                                                    </Text>
                                                    <Text style={{ marginTop: '5%', color: '#fff' }}>
                                                        June 28th, 2020
                                                    </Text>
                                                </View>
                                                <View 
                                                    style={{ 
                                                        width: wp('14%'), 
                                                        height: hp('6%'), 
                                                        backgroundColor: '#fff',
                                                        borderRadius: 10,
                                                        justifyContent:'center'
                                                        }}>
                                                    <Text style={{ alignSelf:'center', fontSize: 18,}}>{'12'}
                                                        <Text></Text>
                                                    </Text>
                                                </View>
                                            </View>
                                            <View 
                                                style={{ 
                                                    marginTop: '10%', 
                                                    width: wp ('30%'), 
                                                    marginStart: '10%',
                                                    }}>
                                                <TouchableOpacity 
                                                    style={{ 
                                                        borderColor: '#fff', 
                                                        borderWidth: 2, 
                                                        borderRadius: 10,
                                                        alignItems:'center',
                                                        height: hp('5%'), 
                                                        
                                                        }}>
                                                    <Text style={{ color: '#fff', fontSize: 25,}} > Press </Text> 
                                                </TouchableOpacity>
                                            </View> 
                                    </Card>
                                </View>

                                <View style={{
                                    marginTop: '5%'
                                    }}>
                                    <Card style={{
                                            backgroundColor: '#40916c',
                                            width: wp('90%'),
                                            height: hp('20%'),
                                            borderRadius: 20,
                                                                    
                                        }}>
                                            <View 
                                                style={{  
                                                    flexDirection:'row', 
                                                    justifyContent: 'space-around', 
                                                    margin: 10 }}>
                                                    <Icon name="facebook" size={50} color="lightblue" />
                                                <View style={{ width: wp('45%'), height: hp('7%'),}}>
                                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                                        {'How to grow your facebook Page'}
                                                    </Text>
                                                    <Text style={{ marginTop: '5%', color: '#fff' }}>
                                                        June 28th, 2020
                                                    </Text>
                                                </View>
                                                <View 
                                                    style={{ 
                                                        width: wp('14%'), 
                                                        height: hp('6%'), 
                                                        backgroundColor: '#fff',
                                                        borderRadius: 10,
                                                        justifyContent:'center'
                                                        }}>
                                                    <Text style={{ alignSelf:'center', fontSize: 18,}}>{'12'}
                                                        <Text></Text>
                                                    </Text>
                                                </View>
                                            </View>
                                            <View 
                                                style={{ 
                                                    marginTop: '10%', 
                                                    width: wp ('30%'), 
                                                    marginStart: '10%',
                                                    }}>
                                                <TouchableOpacity 
                                                    style={{ 
                                                        borderColor: '#fff', 
                                                        borderWidth: 2, 
                                                        borderRadius: 10,
                                                        alignItems:'center',
                                                        height: hp('5%'), 
                                                        
                                                        }}>
                                                    <Text style={{ color: '#fff', fontSize: 25,}} > Press </Text> 
                                                </TouchableOpacity>
                                            </View> 
                                    </Card>
                                </View>

                                <View style={{
                                    marginTop: '5%'
                                    }}>
                                    <Card style={{
                                            backgroundColor: '#023e8a',
                                            width: wp('90%'),
                                            height: hp('20%'),
                                            borderRadius: 20,
                                                                    
                                        }}>
                                            <View 
                                                style={{  
                                                    flexDirection:'row', 
                                                    justifyContent: 'space-around', 
                                                    margin: 10 }}>
                                                    <Icon name="facebook" size={50} color="lightblue" />
                                                <View style={{ width: wp('45%'), height: hp('7%'),}}>
                                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                                        {'Grow your community'}
                                                    </Text>
                                                    <Text style={{ marginTop: '5%', color: '#fff' }}>
                                                        June 28th, 2020
                                                    </Text>
                                                </View>
                                                <View 
                                                    style={{ 
                                                        width: wp('14%'), 
                                                        height: hp('6%'), 
                                                        backgroundColor: '#fff',
                                                        borderRadius: 10,
                                                        justifyContent:'center'
                                                        }}>
                                                    <Text style={{ alignSelf:'center', fontSize: 18,}}>{'12'}
                                                        <Text></Text>
                                                    </Text>
                                                </View>
                                            </View>
                                            <View 
                                                style={{ 
                                                    marginTop: '10%', 
                                                    width: wp ('30%'), 
                                                    marginStart: '10%',
                                                    }}>
                                                <TouchableOpacity 
                                                    style={{ 
                                                        borderColor: '#fff', 
                                                        borderWidth: 2, 
                                                        borderRadius: 10,
                                                        alignItems:'center',
                                                        height: hp('5%'), 
                                                        
                                                        }}>
                                                    <Text style={{ color: '#fff', fontSize: 25,}} > Press </Text> 
                                                </TouchableOpacity>
                                            </View> 
                                    </Card>
                                </View>

                                <View style={{
                                    marginTop: '5%'
                                    }}>
                                    <Card style={{
                                            backgroundColor: '#ff9770',
                                            width: wp('90%'),
                                            height: hp('20%'),
                                            borderRadius: 20,
                                                                    
                                        }}>
                                            <View 
                                                style={{  
                                                    flexDirection:'row', 
                                                    justifyContent: 'space-around', 
                                                    margin: 10 }}>
                                                    <Icon name="facebook" size={50} color="lightblue" />
                                                <View style={{ width: wp('45%'), height: hp('7%'),}}>
                                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                                        {'How to grow your facebook Page'}
                                                    </Text>
                                                    <Text style={{ marginTop: '5%', color: '#fff' }}>
                                                        June 28th, 2020
                                                    </Text>
                                                </View>
                                                <View 
                                                    style={{ 
                                                        width: wp('14%'), 
                                                        height: hp('6%'), 
                                                        backgroundColor: '#fff',
                                                        borderRadius: 10,
                                                        justifyContent:'center'
                                                        }}>
                                                    <Text style={{ alignSelf:'center', fontSize: 18,}}>{'12'}
                                                        <Text></Text>
                                                    </Text>
                                                </View>
                                            </View>
                                            <View 
                                                style={{ 
                                                    marginTop: '10%', 
                                                    width: wp ('30%'), 
                                                    marginStart: '10%',
                                                    }}>
                                                <TouchableOpacity 
                                                    style={{ 
                                                        borderColor: '#fff', 
                                                        borderWidth: 2, 
                                                        borderRadius: 10,
                                                        alignItems:'center',
                                                        height: hp('5%'), 
                                                        
                                                        }}>
                                                    <Text style={{ color: '#fff', fontSize: 25,}} > Press </Text> 
                                                </TouchableOpacity>
                                            </View> 
                                    </Card>
                                </View>

                        </ScrollView> 
      {/* end ScrollView/////////////////////////////////////////////////////////////// */}
                    </View>
            </Fragment>
        );
    }
}

export default Library;

const styles = StyleSheet.create({
    curve: {
        backgroundColor:'#009387',
        width: wp('100%'),
        height: hp('30%'),
    }
});