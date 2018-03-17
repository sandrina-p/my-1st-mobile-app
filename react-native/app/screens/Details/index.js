import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Root extends Component<{}> {
    render() {
        return (
            <View>
                <Text>{ '\n\n\n' }Details page</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', { from: 'details' })}
                    title={ 'Go to Chat' }
                />
            </View>
        );
    }
}
