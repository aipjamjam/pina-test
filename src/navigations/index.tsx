import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import HomeNavigation from './HomeNavigator';

const Root = createStackNavigator();

const getScreens = () => {
    return [...HomeNavigation.getNavigation(Root)];
};

const RootNavigation = () => {
    return (
        <Root.Navigator
            initialRouteName="ExpenseScreen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            {getScreens()}
        </Root.Navigator>
    );
};

export default RootNavigation;
