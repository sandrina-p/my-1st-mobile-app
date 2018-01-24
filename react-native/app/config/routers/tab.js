import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from '../../screens/Home';
import Details from '../../screens/Details';

const MainTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, focused }) => focused ? <Text>🐽</Text> : <Text>🐷</Text>,
        },
    },
    Details: {
        screen: Details,
        navigationOptions: {
            tabBarLabel: 'Details',
            tabBarIcon: ({tintColor, focused }) => focused ? <Text>😱</Text> : <Text>🤔</Text>,
        },
    },
});

export default MainTab;
