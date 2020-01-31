import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    DrawerLayoutAndroid,
    StyleSheet,
    StatusBar,
    Header,
    TouchableOpacity,
    AsyncStorage,
    TextInput,
} from 'react-native'
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';




class icon extends Component {
    state = {
        photo: null,
        name: '',
        // date: new Date(),

    };
    // date: new Date().getHours(),
    //         month: new Date().getMonth() + 1, //Current Month
    // year : new Date().getFullYear(), //Current Year
    // hours : new Date().getHours(), //Current Hours
    // min : new Date().getMinutes(), //Current Minutes
    // sec : new Date().getSeconds(), //Current Seconds



// setDate = (date) => {
//     // AsyncStorage.setItem('date', date);
//     this.setState({ 'date': date });
// }
// componentDidMount = () => AsyncStorage.getItem('date')
// .then((value) => {
//   this.setState({ 'name': value })
// // })
pickerImage = () => {
    let options = {};
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {


            const source = { uri: response.uri };

            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
                avatarSource: source,
            });
        }
    });
}
// goHome
render() {
    // const { photo } = this.state;
    return (
        <View style={styles.main}>
            <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
            <View style={styles.upload}>
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
                <View style={styles.headingAlign}>
                    <Text style={styles.mainHeading}>
                        Upload Image
                        </Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.iconAlign}
                onPress={() => this.pickerImage()}>
                {
                    this.state.avatarSource && (
                        <Image
                            source={this.state.avatarSource}
                            style={styles.iconImage} />
                    )}
            </TouchableOpacity>
            <View style={styles.addButtun}>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.tex}>
                        Upload
                        </Text>
                </TouchableOpacity>
            </View>
        </View>

        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(249, 255, 228)',
        flex: 1,

    },
    mainHeading: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    headingAlign: {
        justifyContent: 'center',
        width: '78%',
        textAlign: 'center',
    },
    iconAlign: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        width: 105,
        height: 105,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: 'rgb(158, 158, 158)',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        // backgroundColor:'black',
    },
    iconImage: {
        width: 90,
        height: 90,
        borderRadius: 110,

    },
    upload: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        textAlign: 'center',
        padding: 10,

    },
    addButtun: {
        position: 'absolute',
        bottom: 0,
        width: '90%',
        height: 40,
        backgroundColor: 'rgb(158, 158, 158)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 20,
    },
    tex: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },

})
export default icon