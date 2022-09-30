/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {styles} from './SplashScreen.style';

const SplashScreen = () => {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 30,
                    backgroundColor: '#fff',
                    width: width / 2.3,
                    height: width / 2.3,
                    borderRadius: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={require('../../../assets/icons/pina-icon.png')}
                    style={{
                        width: width / 3.5,
                        height: width / 3.5,
                        resizeMode: 'contain',
                    }}
                />
            </View>
            {/* <Text style={styles.title}>Splash Screen</Text> */}
        </View>
    );
};

export default SplashScreen;
