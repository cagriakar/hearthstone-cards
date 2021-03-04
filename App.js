/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import MainStackScreens from './src/screens/MainStackScreens';
import SearchModalScreen from './src/screens/SearchModalScreen';

const RootStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" headerMode="none">
                <RootStack.Screen name="Main" component={MainStackScreens} />
                <RootStack.Screen
                    name="SearchModal"
                    component={SearchModalScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
