import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CardsListByMechanic from '../CardListByMechanic';
import MechanicsScreen from '../MechanicsScreen';

const MainStack = createStackNavigator();

const MainStackScreens = () => {
    return (
        <MainStack.Navigator initialRouteName="Mechanics">
            <MainStack.Screen
                name="Mechanics"
                component={MechanicsScreen}
                options={{
                    title: 'Hearthstone Cards Mechanics',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: '#991DB5'
                }}
            />
            <MainStack.Screen
                name="Cards"
                component={CardsListByMechanic}
                options={({ route }) => ({
                    title: `Cards with ${route.params.mechanic}`,
                    headerTintColor: '#991DB5'
                })}
            />
        </MainStack.Navigator>
    );
};

export default MainStackScreens;
