/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {colors} from '../../../styles';
import {Button, FlexRow} from '../../atoms';

const ExpenseOptions = () => {
    return (
        <FlexRow>
            <Button
                label={'Pengeluaran'}
                outStyle={{flex: 1}}
                style={{padding: 8, backgroundColor: colors.third}}
                labelColor={'#fff'}
            />
            <Button
                label={'Pemasukan'}
                outStyle={{flex: 1}}
                style={{padding: 8, backgroundColor: colors.g300}}
            />
        </FlexRow>
    );
};

export default ExpenseOptions;
