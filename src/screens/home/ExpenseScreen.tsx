import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Wallet} from '../../assets/icons/svg';
import {Select} from '../../components/atoms';

const ExpenseScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 24}}>
            <Wallet />
            <Select
                label="Pilih Kategori"
                onSelect={() => navigation.navigate('CategoryList')}
            />
        </View>
    );
};

export default ExpenseScreen;
