import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Assignment extends Component {
  render(){
    return(
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#000', 
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
                            style={{ backgroundColor:'#000',
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              borderRadius: 20,
                              alignItems:'center',
                              height: hp('5%'), 
                              justifyContent:'center',
                            }}>
                          <Text style={{ color: '#fff', fontSize: 20,}} > Press </Text> 
                        </TouchableOpacity>
                      </View>
                </View>
              </View>
            </Card>

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#e9c46a', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              backgroundColor:'#e9c46a',
                              // borderWidth: 2, 
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#d62828', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor:'#d62828',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#f94144', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor:'#f94144',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#006d77', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor:'#006d77',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#55a630', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor: '#55a630',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#d4d700', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor: '#d4d700',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#007f5f', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor:'#007f5f',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#e500a4', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor:'#e500a4',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#2d6a4f', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor:'#2d6a4f',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#b56576', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#000', 
                              // borderWidth: 2, 
                              backgroundColor:'#b56576',
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
            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#ffd23f', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              // borderColor: '#52796f', 
                              // borderWidth: 2, 
                              backgroundColor: '#ffd23f',
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

            <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
              <View>
                <View style={{ flexDirection:'row', }}>
                  <View
                    style={{
                      backgroundColor:'#03045e', 
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
                            marginStart: 80
                            }}>
                          <TouchableOpacity 
                            style={{ 
                              borderColor: '#000', 
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
        </ScrollView>
      </View>
    );
  }
}

export default Assignment;

