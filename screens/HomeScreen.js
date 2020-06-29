import React,{useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Fees from './Fees';
import AssignmentTab from './AssignmentTab';

// import Carousel from 'simple-carousel-react-native';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-shadow-cards';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = ({navigation})  => {


  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  // const goForward = () => {
  //   carouselRef.current.snapToNext();
  // };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);


  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage 
          source={{uri: item.illustration}}
          containerStyle={styles.card}
          // style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    );
  };


  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <StatusBar backgroundColor="#009387" barstyle={theme.dark ? "light-content" : "dark-content"} />

      {/* Carousel */}

      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          // sliderHeight={500}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
      {/* End Carousel */}

      {/* Upcomming Test */}
      <View style={{ flex: 0 }}>
        <Card style={{ padding: 15, marginTop: 10 }}
          // backgroundColor='#aaa'
          elevation={20}
        >
          <Text>Upcoming Test</Text>
        </Card>
      </View>
      {/* End Upcomming Test */}

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Card style={{ padding: 10, margin: 20, width: '80%', height: '55%' }}
             backgroundColor='#aaa'
            elevation={20}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 30, alignContent: 'center', textAlign: 'center' }}>1500
            <Icon
                name="md-cash"
                color="black"
                size={30}
              />
            </Text>
            <Text style={{ textAlign: 'center' }}>Pending Fees</Text>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate(Fees)}}
            style={styles.button}>
              <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000' }}>View All</Text>
            </TouchableOpacity>
          </Card>
        </View>
        {/* End Card */}

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card style={{ padding: 10, margin: 20, width: '80%', height: '55%' }}
             backgroundColor='#aaa'
            elevation={20}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 30, alignContent: 'center', textAlign: 'center' }}>1500
            <Icon
                name="md-book"
                color="black"
                size={30}
              />
            </Text>
            <Text style={{ textAlign: 'center' }}>Total Assignment</Text>
            <TouchableOpacity 
              onPress={()=> {navigation.navigate(AssignmentTab)}}
              style={styles.button}>
              <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000' }}>View All</Text>
            </TouchableOpacity>
          </Card>
        </View>
        {/* End Card */}
      </View>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 180,
  },
  card: {
    flex: 1,
    // marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: '#A91B85',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#08d4c4',
    padding: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;