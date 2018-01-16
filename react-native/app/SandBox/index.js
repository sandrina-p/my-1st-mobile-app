import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Button
} from 'react-native';
import PropTypes from 'prop-types';
import { ThemeProvider } from "styled-components/native";
import { theme, StyledView, StyledFooter, StyledText} from './styles';

export default class App extends Component<{
    theme: string,
}> {

    static propTypes = {
        /** Theme to feed this SandBox */
        theme: PropTypes.oneOf([
            'dark', 'light'
        ]),
    }

    static defaultProps = {
        theme: 'dark',
    }

    constructor(props) {
        super(props);

        this.makeItGrow = this.makeItGrow.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);

        this.stages = [
            '✨', '🌱', '🌿', '🌳', '🏡', '🏘', '🏰', '✈️', '🚀', '💫', '👽', '👾', '✨'
        ]

        this.state = {
            theme: props.theme || 'dark',
            grown: 1
        };
    }

    render() {
        return (
            <ThemeProvider theme={ theme[this.state.theme] }>
                <StyledView>
                    <StyledText>
                        Something is borning
                    </StyledText>
                    <StyledText size='xl'>
                        { this.stages[this.state.grown] }
                    </StyledText>
                    <Button
                        color={ theme[this.state.theme].primary }
                        onPress={ this.makeItGrow }
                        title="Click me to grow"
                    />

                    <StyledFooter>
                        <Button
                            color={ theme[this.state.theme].neutral }
                            onPress={ this.toggleTheme }
                            title={ this.state.theme === 'light' ? '🌙 Night mode' : '😎 Day mode' }
                        />
                    </StyledFooter>
                </StyledView>
            </ThemeProvider>
        )
    }

    makeItGrow() {
        this.setState({
            grown: this.stages[this.state.grown + 1] ? this.state.grown + 1 : 1,
        });
    }

    toggleTheme() {
        this.setState({
            theme: this.state.theme === 'dark' ? 'light' : 'dark',
        });
    }
}
