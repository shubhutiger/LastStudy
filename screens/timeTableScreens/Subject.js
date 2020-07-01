import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Dimensions } from 'react-native';
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
        
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;

        return(
            <Fragment>
                {/* <StatusBar translucent backgroundColor="transparent" /> */}
               
                    
 {/* srocllview statt heremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}
                    
   
              <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ 
                  }}>

                      <View  style={{ flex: 1, marginTop: 20, width: screenWidth, alignItems:'center' }}>
                          <Card style={{
                                  backgroundColor: '#023e8a',
                                  width: wp('90%'),
                                  height: hp('70%'),
                                  borderRadius: 20,
                                  elevation: 10 
                              }}>
                                <View style={{ alignItems:'center',padding:10 }}>
                                  <Text style={{ color: '#fff', fontSize: 20 }}>
                                    {'MONDAY'}
                                  </Text>
                                </View>
                            
                              <View style={{ flex: 1, justifyContent:'space-around' }}>
                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 ,
                                  margin: 5
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>
                              </View>
                        </Card>
                      </View>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                      <View style={{flex: 1, marginTop: 20, width: screenWidth, alignItems:'center'}}>
                          <Card style={{
                                  backgroundColor: '#ffadad',
                                  width: wp('90%'),
                                  height: hp('70%'),
                                  borderRadius: 20,
                                  elevation:10                       
                              }}> 
                                  <View style={{ alignItems:'center',padding:10 }}>
                                  <Text style={{ color: '#fff', fontSize: 20 }}>
                                    {'TEUSDAY'}
                                  </Text>
                                </View>
                            
                              <View style={{ flex: 1, justifyContent:'space-around' }}>
                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 ,
                                  margin: 5
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>
                              </View>
                          </Card>
                      </View>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                      <View style={{flex: 1, marginTop: 20, width: screenWidth, alignItems:'center'}}>
                          <Card style={{
                                  backgroundColor: '#ffe66d',
                                  width: wp('90%'),
                                  height: hp('70%'),
                                  borderRadius: 20,
                                  elevation:10           
                              }}>
                                  <View style={{ alignItems:'center',padding:10 }}>
                                  <Text style={{ color: '#fff', fontSize: 20 }}>
                                    {'WEDNESDAY'}
                                  </Text>
                                </View>
                            
                              <View style={{ flex: 1, justifyContent:'space-around' }}>
                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 ,
                                  margin: 5
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>
                              </View>
                          </Card>
                      </View>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                      <View style={{flex: 1, marginTop: 20, width: screenWidth, alignItems:'center'}}>
                          <Card style={{
                                  backgroundColor: '#ffadad',
                                  width: wp('90%'),
                                  height: hp('70%'),
                                  borderRadius: 20,
                                  elevation:10                       
                              }}> 
                              <View style={{ alignItems:'center',padding:10 }}>
                                  <Text style={{ color: '#fff', fontSize: 20 }}>
                                    {'THUSDAY'}
                                  </Text>
                                </View>
                            
                              <View style={{ flex: 1, justifyContent:'space-around' }}>
                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 ,
                                  margin: 5
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>
                              </View>
                          </Card>
                      </View>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                      <View style={{flex: 1, marginTop: 20, width: screenWidth, alignItems:'center'}}>
                          <Card style={{
                                  backgroundColor: '#ffadad',
                                  width: wp('90%'),
                                  height: hp('70%'),
                                  borderRadius: 20,
                                  elevation:10                       
                              }}> 
                              <View style={{ alignItems:'center',padding:10 }}>
                                  <Text style={{ color: '#fff', fontSize: 20 }}>
                                    {'FIRDAY'}
                                  </Text>
                                </View>
                            
                              <View style={{ flex: 1, justifyContent:'space-around' }}>
                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 ,
                                  margin: 5
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>
                              </View>
                          </Card>
                      </View>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                      <View style={{flex: 1, marginTop: 20, width: screenWidth, alignItems:'center'}}>
                          <Card style={{
                                  backgroundColor: '#ffadad',
                                  width: wp('90%'),
                                  height: hp('70%'),
                                  borderRadius: 20,
                                  elevation:10                       
                              }}> 
                              <View style={{ alignItems:'center',padding:10 }}>
                                  <Text style={{ color: '#fff', fontSize: 20 }}>
                                    {'SATURDAY'}
                                  </Text>
                                </View>
                            
                              <View style={{ flex: 1, justifyContent:'space-around' }}>
                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 ,
                                  margin: 5
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>
                              </View>
                          </Card>
                      </View>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                      <View style={{flex: 1, marginTop: 20, width: screenWidth, alignItems:'center'}}>
                          <Card style={{
                                  backgroundColor: '#ffadad',
                                  width: wp('90%'),
                                  height: hp('70%'),
                                  borderRadius: 20,
                                  elevation:10                       
                              }}> 
                              <View style={{ alignItems:'center',padding:10 }}>
                                  <Text style={{ color: '#fff', fontSize: 20 }}>
                                    {'SUNDAY'}
                                  </Text>
                                </View>
                            
                              <View style={{ flex: 1, justifyContent:'space-around' }}>
                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 ,
                                  margin: 5
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>

                                <Card style={{ 
                                  width: wp('80%'),  
                                  height: hp('8%'), 
                                  alignSelf:'center',
                                  elevation: 30 
                                  }}>
                                  <View>
                                    <View style={{ flexDirection:'row', }}>
                                          <View style={{ justifyContent:'space-around', flex:1, padding: 20 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                              {'Maths'}</Text>
                                              {/* <Text style={{ fontSize: 14 }} > {'10-5-2020'} 
                                            </Text> */}
                                          </View>
                                          <View 
                                            style={{ 
                                                justifyContent: 'center',
                                                
                                                }}>
                            
                                                <View style={{
                                                  backgroundColor:'#aaa',
                                                  width:130,
                                                  height: 30,
                                                  elevation:10,
                                                  marginEnd: 10,
                                                  justifyContent:'center',
                                                  alignItems:'center'
                                                }}>
                                                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                    {'8:00 AM | 8:30AM'}
                                                  </Text>
                                                </View>
                                          </View>
                                    </View>
                                  </View>
                                </Card>
                              </View>
                          </Card>
                      </View>

              </ScrollView> 
      {/* end ScrollView/////////////////////////////////////////////////////////////// */}
                    
          </Fragment>
        );
    }
}

export default Library;

const styles = StyleSheet.create({
    subjectCard:{
      
    }
});