/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {Button, FlexRow, Header} from '../../components/atoms';
import {ExpenseOptions} from '../../components/organisms/home';
import {colors} from '../../styles';
import ExpenseScreen from './ExpenseScreen';

const Home = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Header title="Buat Transaksi" />
            <View style={{flex: 1, padding: 16, paddingTop: 8}}>
                <ExpenseOptions />
                <ExpenseScreen />
            </View>
        </View>
    );
};

export default Home;
