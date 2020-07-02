import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Subject extends Component {

  render(){
    const screenWidth = Dimensions.get('window').width;
    var cards = [];
    for(var i=0; i<=6; i++){
      cards.push(
        
        <View  key={i} style={{ flex: 1, marginTop: 20, width: screenWidth, alignItems:'center' }}>
          <Card style={{
             backgroundColor: '#' + (Math.random().toString(16) + "000000").substring(2,8),
             width: wp('90%'),
             height: hp('70%'),
             borderRadius: 20,
             elevation: 10 
            }}>

              <View style={{ alignItems:'center',padding:10 }}>
                <Text style={{ color: '#fff', fontSize: 20 }}>
                  {i == 0 ? "MONDAY" :
                   i==1 ? "TUESDAY" : 
                   i == 2 ? "WEDNESDAY" : 
                   i == 3 ? "THURSDAY":
                   i == 4 ? "FRIDAY":
                   i == 5 ? "SATURDAY":
                   i == 6 ? "SUNDAY": ''
                  }
                </Text>
              </View>
          
            <View style={{ flex: 1, justifyContent:'space-around' }}>
              <Card style={styles.subjectCard}>
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
          
                              <View style={styles.timeingStyle}>
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
          
                              <View style={styles.timeCardStyle}>
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
          
                              <View style={styles.timeCardStyle}>
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
          
                              <View style={styles.timeCardStyle}>
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
          
                              <View style={styles.timeCardStyle}>
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
      )
    }
    return(
      <View>
        <ScrollView 
            horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ 
            }} >
          {cards}
        </ScrollView>
      </View>
    )
  }
}

export default Subject;

const styles = StyleSheet.create({
  //   cardStyle:{
     
  // },
  subjectCard:{ 
    width: wp('80%'),  
    height: hp('8%'), 
    alignSelf:'center',
    elevation: 30 ,
    margin: 5
    },
    timeingStyle:{
      backgroundColor:'#aaa',
      width:130,
      height: 30,
      elevation:10,
      marginEnd: 10,
      justifyContent:'center',
      alignItems:'center'
    },
    timeCardStyle:{
      backgroundColor:'#aaa',
      width:130,
      height: 30,
      elevation:10,
      marginEnd: 10,
      justifyContent:'center',
      alignItems:'center'
    }
});