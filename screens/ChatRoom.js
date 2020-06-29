import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';
import { Avatar, Title, Caption} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card } from 'react-native-shadow-cards';


const ChatRoom = ({ navigation }) => {

  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barstyle={theme.dark ? "light-content" : "dark-content"} />
      <Text style={styles.text_header}>Start Your Discussion</Text>
      <View style={styles.header}>
        <ScrollView
          horizontal={true}
          bounces={true}
        >
          <View style={{ marginTop: 15, marginRight: 25 }}>
            <Avatar.Image
              source={require('../src/img/avatar.png')}
              size={75}
            />
            <Text style={{ color: colors.text , marginLeft: 5, fontWeight: 'bold', fontSize: 16, marginTop: 5}}>Anil Patil</Text>

          </View>
          <View style={{ marginTop: 15, marginRight: 25 }}>
            <Avatar.Image
              source={require('../src/img/avatar.png')}
              size={75}
            />
            <Text style={{ color: colors.text , marginLeft: 5, fontWeight: 'bold', fontSize: 16, marginTop: 5}}>Anil Patil</Text>
          </View>
          <View style={{ marginTop: 15, marginRight: 25 }}>
            <Avatar.Image
              source={require('../src/img/avatar.png')}
              size={75}
            />
            <Text style={{ color: colors.text , marginLeft: 5, fontWeight: 'bold', fontSize: 16, marginTop: 5}}>Anil Patil</Text>
          </View>
          <View style={{ marginTop: 15, marginRight: 25 }}>
            <Avatar.Image
              source={require('../src/img/avatar.png')}
              size={75}
            />
            <Text style={{ color: colors.text , marginLeft: 5, fontWeight: 'bold', fontSize: 16, marginTop: 5}}>Anil Patil</Text>
          </View>
          <View style={{ marginTop: 15, marginRight: 25 }}>
            <Avatar.Image
              source={require('../src/img/avatar.png')}
              size={75}
            />
            <Text style={{ color: colors.text , marginLeft: 5, fontWeight: 'bold', fontSize: 16, marginTop: 5}}>Anil Patil</Text>
          </View>


        </ScrollView>
      </View>

      {/*  */}
      <View style={styles.footer} animation='fadeInUpBig'>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ChatScreen')}>
        <View style={{ flex: 0 }}>
          <Card style={{ padding: 15, marginTop: 10 }}
            // backgroundColor='#aaa'
            elevation={20}
          >
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../src/img/avatar.png')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Title style={styles.title}>Akash Sonawane
                <Text style={styles.title}>2:30Pm</Text></Title>
                <Caption style={styles.caption}>How Are You .?</Caption>
              </View>
            </View>

          </Card>
        </View>
        </TouchableOpacity>
        <View style={{ flex: 0 }}>
          <Card style={{ padding: 15, marginTop: 10 }}
            // backgroundColor='#aaa'
            elevation={20}
          >
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../src/img/avatar.png')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Shubham Ambade</Title>
                <Caption style={styles.caption}>What Are You Doing.?</Caption>
              </View>
            </View>
            
          </Card>
        </View>
        <View style={{ flex: 0 }}>
          <Card style={{ padding: 15, marginTop: 10 }}
            // backgroundColor='#aaa'
            elevation={20}
          >
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../src/img/avatar.png')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Rahul Patil</Title>
                <Caption style={styles.caption}> Are You Busy.?</Caption>
              </View>
            </View>
            
          </Card>
        </View>
        <View style={{ flex: 0 }}>
          <Card style={{ padding: 15, marginTop: 10 }}
            // backgroundColor='#aaa'
            elevation={20}
          >
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../src/img/avatar.png')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={[styles.title,{flexDirection: 'row'}]}>Dhananjay Patil</Title>
                <Text>2:30Pm</Text>
                <Caption style={styles.caption}>Are You There.?</Caption>
              </View>
            </View>
            
          </Card>
        </View>
        

      </View>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 10
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    paddingHorizontal: 20
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  }
});
