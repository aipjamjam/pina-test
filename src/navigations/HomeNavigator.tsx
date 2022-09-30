import React from 'react';
import {CategoryList} from '../components/molecules';
import Home from '../screens/home';
import ScreenTransitions from './animations/ScreenTransitions';

function getNavigation(Root: {Screen: any}) {
    return [
        <Root.Screen
            name="HomeScreen"
            component={Home}
            key="HomeScreen"
            options={{
                headerShown: false,
            }}
        />,
        <Root.Screen
            name="CategoryList"
            component={CategoryList}
            key="CategoryList"
            options={{
                headerShown: false,
                ...ScreenTransitions.bottomsheet,
            }}
        />,
    ];
}

const ExpenseNavigation = {
    getNavigation,
};

export default ExpenseNavigation;
