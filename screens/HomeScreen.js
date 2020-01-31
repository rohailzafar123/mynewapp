import React, { Component } from 'react'
import {
  Text,
  View,
  DrawerLayoutAndroid,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BackIcon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
  state = {
    'name': ''
  }
  addpost = () => {

    this.props.navigation.navigate('AddPost')

  }
  componentDidMount = () => AsyncStorage.getItem('name')
    .then((value) => {
      this.setState({ 'name': value })
    })


  render() {
    return (

      <View style={styles.main}>
        <StatusBar backgroundColor="rgb(242,244,255)" barStyle="dark-content"></StatusBar>
        <View style={styles.Header}>
          <View style={styles.backIcon}>
            <TouchableOpacity
              style={{
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => this.props.navigation.goBack()}>
              <BackIcon name="keyboard-backspace" size={30} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.headingAlign}>
            <Text style={styles.textHome}>
              Home
            </Text>
          </View>
        </View>
        
        <View style={styles.allCardAlgnment}>
          <View style={styles.cardAlgnment}>
            <Image
              source={require('../images/tiger.jpeg')}
              style={styles.card}
            />
            <TouchableOpacity onPress={() => alert('image clicked')}>
              <Text style={styles.textStyle}>
                3 day ago
              </Text>
              <View style={styles.line}>
              </View>

              <Text style={styles.textStyle}>
                Tiger
                {/* {this.state.name} */}
              </Text>
            </TouchableOpacity>

          </View>

        </View>
        <View style={styles.addButtun}>
          <TouchableOpacity onPress={this.addpost}>
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
    // justifyContent: 'center',
    flexDirection: 'row',
    width:'100%',
    textAlign: 'center',

  },
  textHome: {
    fontSize: 30,
    textAlign: 'center',
    color: 'rgb(218,174,209)',

  },
  headingAlign: {
    justifyContent: 'center',
    width: '80%',
    textAlign: 'center',
},
  main: {
    flex: 1,
    backgroundColor: 'white',

  },
  backIcon:{
    position:'relative',
    left:0,
    alignSelf:'center',
    marginLeft:5,

  },
  card: {
    width: 150,
    height: 150,
    // marginTop: 5,
    // marginHorizontal: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  allCardAlgnment: {
    // flexDirection: 'row',
    margin: 15,
    padding: 0,
    flexWrap: 'wrap',

  },
  cardAlgnment: {
    width: 150,
    height: 240,
    backgroundColor: 'rgb(242,244,255)',
    borderRadius: 30,
    shadowColor: 'black',
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
    margin: 5,
    color: 'rgb(179,182,188)',
    marginLeft: 15,

  },
  line: {
    width: '100%',
    backgroundColor: 'rgb(179,182,188)',
    height: 1,
    // marginVertical:5,
  },
  addButtun: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 100,
    height: 40,
    backgroundColor: 'rgb(72,77,198)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
  },
  tex: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
})
export default Home;
