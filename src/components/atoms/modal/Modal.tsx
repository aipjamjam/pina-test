/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import {modalProps} from './Modal.interface';
import {styles} from './Modal.style';

const Modal = ({title = 'title', children}: modalProps) => {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
            <Pressable onPress={() => navigation.goBack()} style={{flex: 1}} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {children}
            </View>
        </View>
    );
};

export default Modal;
