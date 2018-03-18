import React, { Component } from 'react';
import { View } from 'react-native';
import TabNavigator from '../../config/routers/tab';

export default class TabNavigatorSreen extends Component<{}> {
    render() {
        return (
            <View style={ {flex: 1} }>
                <TabNavigator navigation={ this.props.navigation } />
            </View>
        );
    }
}

TabNavigatorSreen.router = TabNavigator.router;
