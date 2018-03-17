import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Root extends Component<{}> {
    render() {
        return (
            <View>
                <Text>{ '\n\n\n' }Home</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', { from: 'Home' })}
                    title={ 'Go to Chat' }
                />
            </View>
        );
    }
}
