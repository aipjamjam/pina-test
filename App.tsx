import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import {RootSiblingParent} from 'react-native-root-siblings';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigations';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigations/AuthNavigator';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // console.ignoredYellowBox = true;
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar translucent barStyle={'default'} />
                <RootSiblingParent>
                    {loading ? (
                        <AuthNavigator />
                    ) : (
                        <NavigationContainer>
                            <RootNavigation />
                        </NavigationContainer>
                    )}
                </RootSiblingParent>
            </PersistGate>
        </Provider>
    );
};

export default App;
