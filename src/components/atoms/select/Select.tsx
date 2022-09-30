/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../styles';
import {FlexRow} from '..';
import {selectProps} from './Select.interface';
import {styles} from './Select.style';

const Select = ({label, placeholder, onSelect}: selectProps) => {
    return (
        <View>
            {label && (
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: colors.g900,
                        paddingBottom: 8,
                    }}
                >
                    {label}
                </Text>
            )}
            <Pressable onPress={onSelect}>
                <FlexRow spaceBetween style={styles.wrapper}>
                    <Text style={{color: colors.g500}}>
                        {placeholder ?? label}
                    </Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: colors.secondary,
                            borderRadius: 4,
                        }}
                    >
                        <Icon
                            name="chevron-down"
                            size={16}
                            color={colors.secondary}
                            style={{
                                width: 16,
                                height: 16,
                            }}
                        />
                    </View>
                </FlexRow>
            </Pressable>
        </View>
    );
};

export default Select;
