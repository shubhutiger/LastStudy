import React,{useRef, useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, StatusBar,Dimensions, Image, Platform, TouchableOpacity } from 'react-native';
import {useTheme} from '@react-navigation/native';

// import Carousel from 'simple-carousel-react-native';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

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

    const {colors} = useTheme();
    const theme = useTheme();

    return (
      <View style={{flex:1, alignItems: 'center'}}>
        <StatusBar backgroundColor="#009387" barstyle={theme.dark ? "light-content" : "dark-content"} />
        
        <View style={styles.container}>
          {/* <TouchableOpacity onPress={goForward}>
            <Text>go to next slide</Text>
          </TouchableOpacity> */}
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

        <View style={{ flexDirection: 'row',  }}>
        <Icon name="md-chatbubbles" size={50} style={{  }} />
          <TouchableOpacity
            style={{ backgroundColor: '#CC33FF',
            marginBottom: 120, 
            width: '80%',
            height: 40,
            borderRadius:30, }} >
            <Text style={{textAlign:'center',}}>
              click here 
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex:1, flexDirection:'row',justifyContent: 'space-between' }}>

          <View style={{width: 100, height: 50}}>
            <Text>
              155 
            </Text>
            <TouchableOpacity style={{ backgroundColor: '#aaa', borderRadius: 20}}>
              <Text>
                click
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{width: 100, height: 50}}>
            <Text style={{}}>
              155 
            </Text>
            <TouchableOpacity style={{ backgroundColor: '#000', borderRadius: 20}}>
              <Text style={{ color: '#fff' }}> 
                click
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{width: 100, height: 50}}>
            <Text style={{}}>
              155 
            </Text>
            <TouchableOpacity style={{ backgroundColor: '#aaa',borderRadius: 20}}>
              <Text>
                click
              </Text>
            </TouchableOpacity>
          </View>

         

         
        </View>

        <View style={{  }}>
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
  });

  export default HomeScreen;