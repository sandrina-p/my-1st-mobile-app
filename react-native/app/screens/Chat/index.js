import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Chat extends Component<{}> {
    render() {
        return (
            <View>
                <Text>{ '\n\n\n' }Chat from { this.props.navigation.state.params.from }</Text>
            </View>
        );
    }
}
