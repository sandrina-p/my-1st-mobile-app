import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

import TextOption from '../../shared/components/Button/TextOption';
import {
    FormNarrative,
    NarrativeRow,
    NarrativeText,
    NarrativeInput,
} from '../../shared/components/FormNarrative';
import { CategoriesPick } from '../../shared/components/Categories';

const Feedback = styled.Text`
    text-align: center;
    color: ${({type}) => type === 'error' ? 'red' : 'green'};
`;

export default class Movement extends Component<{}> {
    constructor(props) {
        super(props);

        this.addMovement = this.addMovement.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);

        this.state = {
            date: 'Today',
            type: 'spent',
            amount: null,
            category: {
                id: null,
                name: null,
            },
            submit: {
                type: null,
                msg: null,
            }
        };
    }
    render() {
        return (
            <FormNarrative>
                <NarrativeRow>
                    { this.renderOption('date', 'Today', { noPaddingLeft: true }) }
                    { this.renderOption('date', 'Yesterday') }
                </NarrativeRow>

                <NarrativeRow>
                    <NarrativeText noPaddingLeft>{"I've"}</NarrativeText>
                    { this.renderOption('type', 'spent') }
                    { this.renderOption('type', 'received') }
                    {/* { this.renderOption('type', 'saved') } */}
                </NarrativeRow>

                <NarrativeRow>
                    <NarrativeText noPaddingLeft>€</NarrativeText>
                    <NarrativeInput
                        placeholder="0.00"
                        keyboardType="numeric"
                        onChangeText={ (amount) => this.setState({amount}) }
                    />
                </NarrativeRow>

                <CategoriesPick onCategoryChange={ this.onCategoryChange }/>

                <Button onPress={ this.addMovement } title="Done" />

                <Feedback type={ this.state.submit.type }>
                    { this.state.submit.msg }
                </Feedback>

            </FormNarrative>
        );
    }

    renderOption(state, text, options) {
        return (
            <TextOption
                isActive={ this.state[state] === text }
                onPress={ () => this.onOptionPress(state, text) }
                { ...options }
            >
                { text }
            </TextOption>
        );
    }

    addMovement() {
        if (!this.state.amount && !this.state.category.id) {
            return this.setState({
                submit: {
                    msg: 'Please add an amount and category first',
                    type: 'error',
                },
            });
        }

        if (!this.state.amount) {
            return this.setState({
                submit: {
                    msg: 'Please add an amount',
                    type: 'error',
                },
            });
        }

        if (!this.state.category.id) {
            return this.setState({
                submit: {
                    msg: `Where did you ${this.state.type} €${this.state.amount}?`,
                    type: 'error',
                },
            });
        }

        return this.setState({
            submit: {
                msg: `Success! €${this.state.amount} ${this.state.type} on ${this.state.category.name}!`,
                type: 'success',
            },
        });
    }

    onOptionPress(type, value) {
        if (this.state[type] === value) {
            return false;
        }

        this.setState({
            [type]: value
        });
    }

    onCategoryChange({id, name}) {
        this.setState({
            category: { id, name }
        });
    }
}
