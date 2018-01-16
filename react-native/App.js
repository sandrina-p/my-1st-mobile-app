// React Native App | https://github.com/facebook/react-native | @flow

import React, { Component } from 'react';
import styled from "styled-components/native";
import SandBox from './app/SandBox';

export default class App extends Component {
    render() {
        return <SandBox theme="light" />;
    }
}
