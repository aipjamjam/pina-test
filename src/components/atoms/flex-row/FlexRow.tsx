/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {flexrowProps} from './FlexRow.interface';

const FlexRow = ({
    children,
    center,
    spaceBetween,
    spaceAround,
    flexEnd,
    style,
}: flexrowProps) => {
    return (
        <View
            style={[
                style,
                {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: center
                        ? 'center'
                        : spaceBetween
                        ? 'space-between'
                        : spaceAround
                        ? 'space-around'
                        : flexEnd
                        ? 'flex-end'
                        : 'flex-start',
                },
            ]}
        >
            {children}
        </View>
    );
};

export default FlexRow;
