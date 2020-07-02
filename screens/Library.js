import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Modal } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Library extends Component {

    state = {
        text: '',
        modalVisible: false
      };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }

    render(){
          const { modalVisible } = this.state;
        var cards = [];
        for(var i=0; i<=6; i++){
            cards.push(
                <View key={i}>
                    <Card style={{
                            backgroundColor: '#' + (Math.random().toString(16) + "000000").substring(2,8),
                            width: wp('90%'),
                            height: hp('20%'),
                            borderRadius: 20, marginTop: 10                   
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
                                    style={styles.numberStyle}>
                                    <Text style={{ alignSelf:'center', fontSize: 18,}}>
                                        {'12'}
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
                                    onPress={() => {
                                        this.setModalVisible(true);
                                      }}
                                    style={styles.modalShow}>

                                    <Text style={{ color: '#fff', fontSize: 25,}} > Press </Text>

                                </TouchableOpacity>
                            </View> 
                    </Card>
                </View>
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
                                {cards}
                        </ScrollView> 
      {/* end ScrollView/////////////////////////////////////////////////////////////// */}

                    </View>
                    <Modal 
                            animationType="slide"
                            transparent={false}
                            visible={modalVisible}
                        >

                            <TouchableOpacity
                                onPress={() => {
                                this.setModalVisible(!modalVisible);
                            }}
                            style={{ borderColor: '#000', borderWidth: 2,width: '15%',marginStart: '5%', marginTop: '5%'  }}>
                            <Text style={{ color: '#000', fontSize: 20 }} > close </Text> 
                            </TouchableOpacity>

                        </Modal>
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
    },
    modalShow: { 
        borderColor: '#fff', 
        borderWidth: 2, 
        borderRadius: 10,
        alignItems:'center',
        height: hp('5%'), 
    }, 
    numberStyle:{ 
        width: wp('14%'), 
        height: hp('6%'), 
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent:'center'
    }
});