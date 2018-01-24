import React, { Component } from 'react';
import { View } from 'react-native';
import TabNavigator from '../../config/routers/tab';

export default class NavigatorWrappingScreen extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
          <TabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

NavigatorWrappingScreen.router = TabNavigator.router;
