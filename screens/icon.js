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
} from 'react-native'

import BackIcon from 'react-native-vector-icons/MaterialIcons';

class icon extends Component {

    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor="#FDBDA9" barStyle="dark-content"></StatusBar>
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
                <View style={styles.iconAlign}>
                    <Image
                        source={require('../images/insert.png')}
                        style={styles.iconImage}
                    />
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FDBDA9',
        flex: 1,
    },
    iconAlign: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40,
        width: 105,
        height: 105,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: 'white',
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
})
export default icon