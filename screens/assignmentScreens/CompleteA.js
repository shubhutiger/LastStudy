import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

class CompleteA extends Component { 
  
  render(){
    var cards =[];
    for (var i = 0; i < 13; i++) {
      cards.push(
      <View key={i}>
          <View style={{ alignItems: 'center' }}>
            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#' + (Math.random().toString(16) + "000000").substring(2,8)                    , 
                      width:wp('2%'), height: hp('8%'),
                    }}
                  />
                      <View style={{ justifyContent:'space-around', marginStart:10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                          {'critical social analisys'}</Text>
                          <Text style={{ fontSize: 14 }} > {'COVI19'} 
                        </Text>
                      </View>
                      <View 
                        style={{ 
                            justifyContent: 'center',
                            width: wp ('20%'), 
                            marginStart: 80,
                            }}>
                          <TouchableOpacity 
                            style={{   borderColor: '#'+Math.random().toString(16).substr(-6), 
                            borderWidth: 2, 
                            borderRadius: 20,
                            alignItems:'center',
                            height: hp('5%'), 
                            justifyContent:'center',
                            }}>
                          <Text style={{ color: '#000', fontSize: 20,}} > Press </Text> 
                        </TouchableOpacity>
                      </View>
                </View>
              </View>
            </Card>
          </View>
        {/* </ScrollView> */}
      </View>
      );
  }
    return(
      <View>
        <ScrollView>
          {cards}
        </ScrollView>
      </View>
    );
  }
}

export default CompleteA;

