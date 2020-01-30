import React, { Component } from 'react'
import {
  Text,
  View,
  DrawerLayoutAndroid,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import { Header } from 'react-native/Libraries/NewAppScreen';
class Home extends Component {
  render() {
    return (

      <View style={styles.main}>
        <StatusBar backgroundColor="rgb(242,244,255)" barStyle="dark-content"></StatusBar>
        <View style={styles.Header}>
          <Text style={styles.textHome}>
            Home
          </Text>
        </View>
        <View style={styles.allCardAlgnment}>
          <View style={styles.cardAlgnment}>
              <Image
                source={require('../images/tiger.jpeg')}
                style={styles.card}
              />
            <TouchableOpacity onPress={()=> alert('image clicked')}>
              <Text style={styles.textStyle}>
              3 day ago
              </Text>
              <View style={styles.line}>
              </View>

              <Text style={styles.textStyle}>
                The Tiger
              </Text>
            </TouchableOpacity>

          </View>
          {/* <Image
            source={require('../images/cock.jpg')}
            style={styles.card} />
          <Image
            source={require('../images/dog.jpg')}
            style={styles.card} />
          <Image
            source={require('../images/panda.jpg')}
            style={styles.card} />
          <Image
            source={require('../images/camel.jpg')}
            style={styles.card} />
          <Image
            source={require('../images/wolf.jpg')}
            style={styles.card} /> */}
        </View>
        <View style={styles.addButtun}>
            <TouchableOpacity>
                <Text style={styles.tex}>
                  Add Post
                </Text>
            </TouchableOpacity>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: 'rgb(242,244,255)',
    height: 90,
    justifyContent: 'center',
  },
  textHome: {
    fontSize: 30,
    textAlign: 'center',
    color: 'rgb(218,174,209)',
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    width: 150,
    height: 150,
    // marginTop: 5,
    // marginHorizontal: 15,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,

  },
  allCardAlgnment: {
    // flexDirection: 'row',
    margin: 15,
    padding: 0,
    flexWrap: 'wrap',
  
  },
  cardAlgnment:{
    width: 150,
    height: 240,
    backgroundColor: 'rgb(242,244,255)',
    borderRadius:30,
    shadowColor:'black',
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
  },
  discription: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  textStyle: {
    fontSize: 19,
    fontWeight: 'bold',
    margin:5,
    color:'rgb(179,182,188)',
    marginLeft:15,

  },
  line:{
    width:'100%',
    backgroundColor:'rgb(179,182,188)',
    height:1,
    // marginVertical:5,
  },
  addButtun:{
      position:'absolute',
      bottom:0,
      right:0,
      width:100,
      height:40,
      backgroundColor:'rgb(72,77,198)',
      justifyContent:'center',
      alignItems:'center',
      margin:10,
      borderRadius:20,
  },
  tex:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
})
export default Home;
