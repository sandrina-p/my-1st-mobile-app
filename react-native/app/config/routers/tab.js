import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from '../../screens/Home';
import Movement from '../../screens/Movement';
import Details from '../../screens/Details';

const MainTab = TabNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, focused }) => focused ? <Text>🐽</Text> : <Text>🐷</Text>,
        },
    },
    movement: {
        screen: Movement,
        navigationOptions: {
            tabBarLabel: 'Add',
            tabBarIcon: <Text>➕</Text>,
        },
    },
    details: {
        screen: Details,
        navigationOptions: {
            tabBarLabel: 'Details',
            tabBarIcon: ({tintColor, focused }) => focused ? <Text>😱</Text> : <Text>🤔</Text>,
        },
    },
}, {
    initialRouteName: 'movement',
});

export default MainTab;
