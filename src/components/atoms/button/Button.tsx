/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../styles';
import {buttonProps} from './Button.inteface';
import {styles} from './Button.style';

const Button = ({
    label,
    onPress = () => {},
    type = 'default',
    color = colors.primary,
    labelColor = colors.g900,
    disabled = false,
    icon = '',
    iconSize = 24,
    style,
    outStyle,
}: buttonProps) => {
    const viewOptions = (types: string) => {
        switch (types) {
            case 'default':
                return (
                    <View
                        style={[
                            styles.container,
                            {backgroundColor: disabled ? colors.g300 : color},
                            style,
                        ]}
                    >
                        <Text style={[styles.label, {color: labelColor}]}>
                            {label}
                        </Text>
                    </View>
                );
            case 'icon':
                return (
                    <View style={{padding: 8, backgroundColor: color}}>
                        <Icon name={icon} size={iconSize} />
                    </View>
                );
        }
    };

    return (
        <TouchableHighlight
            underlayColor="transparent"
            onPress={onPress}
            disabled={disabled}
            style={[{margin: 4}, outStyle]}
        >
            {viewOptions(type)}
        </TouchableHighlight>
    );
};

export default Button;
