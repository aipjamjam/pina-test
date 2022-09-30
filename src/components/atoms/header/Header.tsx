import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Header.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../styles';

Icon.loadFont();

const Header = ({title = 'title'}) => {
    return (
        <View style={styles.container}>
            <Icon
                name="chevron-back"
                size={24}
                color={colors.g500}
                style={{height: 26, width: 26}}
            />
            <Text style={styles.title}>{title}</Text>
            <View style={{height: 26, width: 26}} />
        </View>
    );
};

export {Header};
