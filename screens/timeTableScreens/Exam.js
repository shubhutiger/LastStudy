import React, { Component } from 'react';
import { View, Text, ScrollView,Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Assignment extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      modalVisible: false,
      tableHead: ['', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
        widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    }
  }
  

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render(){
    const { modalVisible } = this.state;

    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 28; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return(

      <View style={{flex: 1}} >

        <Modal 
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={{ }}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>

          <TouchableOpacity
            onPress={() => {
            this.setModalVisible(!modalVisible);
            }}
            style={{ borderColor: '#000', borderWidth: 2,width: '15%',marginStart: '5%', marginTop: '5%'  }}>
            <Text style={{ color: '#000', fontSize: 20 }} > close </Text> 
          </TouchableOpacity>

        </Modal>

          <View style={{ }}>
            <ScrollView>
              <View style={{ alignItems: 'center', padding: 10 }}>
                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%'), elevation: 10 }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                    onPress={() => {
                                      this.setModalVisible(true);
                                    }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%'), elevation: 10 }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

              <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%'), elevation: 10 }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                               onPress={() => {
                                this.setModalVisible(true);
                              }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%'), elevation:10 }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%'), elevation:10 }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%'), elevation: 10 }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

              <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%') }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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

                <Card style={{ width: wp('90%'), marginTop: 5, height: hp('8%'), elevation: 10 }}>
                  <View>
                    <View style={{ flexDirection:'row', }}>
                          <View style={{ justifyContent:'space-around', margin:10 }}>
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
                                onPress={() => {
                                  this.setModalVisible(true);
                                }}
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
      </View>
    );
  }
}

export default Assignment;


const styles = StyleSheet.create({
  container: { 
      flex: 1, 
      padding: 2, 
      paddingTop: 10, 
      backgroundColor: '#fff'
    },
  header: { 
      height: 50, 
      backgroundColor: '#537791' 
    },
  text: { 
      textAlign: 'center', 
      fontWeight: '100' 
    },
  dataWrapper: { 
      marginTop: -1 
    },
  row: { 
      height: 40, 
      backgroundColor: '#E7E6E1' 
    }
});