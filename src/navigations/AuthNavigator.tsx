import {NavigationContainer} from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/auth/splashscreen/SplashScreen';

const Root = createStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Root.Navigator
                initialRouteName="Midleware"
                screenOptions={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <Root.Screen
                    name="Midleware"
                    component={SplashScreen}
                    options={{headerShown: false}}
                />
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default AuthNavigator;
