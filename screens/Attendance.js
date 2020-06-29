import React, {useState, Fragment} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import moment from 'moment';
// import _ from 'lodash';

// const testIDs = require('../testIDs');


function Attendance (props) {

  // const [selected, setSelected] = useState('');

  // const onDayPress = (day) => {
  //   setSelected(day.dateString);
  // };

  // const getDisabledDates = (startDate, endDate, daysToDisable) => {
  //   const disabledDates = {};
  //   const start = moment(startDate);
  //   const end = moment(endDate);
  //   for (let m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
  //     if (_.includes(daysToDisable, m.weekday())) {
  //       disabledDates[m.format('YYYY-MM-DD')] = {disabled: true};
  //     }
  //   }
  //   return disabledDates;
  // };

    return (
      <View style={{ height: '100%', backgroundColor: '#009387'}}>
            
            <View style={{ marginStart: 15, marginTop: 10, width: '10%' }}>
              <TouchableOpacity onPress={()=> {props.navigation.goBack()}}>
                <Icon name="arrow-circle-left" size={40} color="#fff"/>
              </TouchableOpacity>
            </View>

        <Calendar
          style={styles.calendar}
          // onDayLongPress={this.onDayLongPress}
          hideExtraDays
          current={'2018-03-01'}
          minDate={'2018-03-01'}
          markingType={'custom'}
          markedDates={{
            '2018-03-01': {
              selected: true
              // customStyles: {
              //   container: {
              //     backgroundColor: 'white',
              //     elevation: 5
              //   },
              //   text: {
              //     color: 'red'
              //   }
              // }
            },
            '2018-03-08': {
              selected: true
            },
            '2018-03-09': {
              selected: true
              // customStyles: {
              //   container: {
              //     backgroundColor: 'red',
              //     elevation: 4
              //   },
              //   text: {
              //     color: 'white'
              //   }
              // }
            },
            '2018-03-14': {
              selected: true
              // customStyles: {
              //   container: {
              //     backgroundColor: 'green'
              //   },
              //   text: {
              //     color: 'white'
              //   }
              // }
            },
            '2018-03-15': {
              selected: true
              // customStyles: {
              //   container: {
              //     backgroundColor: 'black',
              //     elevation: 2
              //   },
              //   text: {
              //     color: 'yellow'
              //   }
              // }
            },
            '2018-03-21': {
              disabled: true
            },
            '2018-03-28': {
              customStyles: {
                text: {
                  color: 'black',
                  fontWeight: 'bold'
                }
              }
            },
            '2018-03-30': {
              customStyles: {
                container: {
                  backgroundColor: 'pink',
                  elevation: 4,
                },
                text: {
                  color: 'black'
                }
              }
            },
            '2018-03-31': {
              customStyles: {
                container: {
                  backgroundColor: 'orange',
                }
              }
            }
          }}
        />
      </View>
    );

};

export default Attendance;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 25,
    elevation: 10,
    width: '90%',
    alignSelf:'center',
    borderRadius: 5
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  }
});