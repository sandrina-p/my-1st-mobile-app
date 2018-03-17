import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

export default class Movement extends Component<{}> {
    constructor(props) {
        super(props);

        this.addMovement = this.addMovement.bind(this);

        this.state = {
            date: 'today',
            type: 'spent',
            amount: null,
            category: null,
        }
    }
    render() {
        return (
            <View>
                <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 35 }}>
                    <TouchableOpacity style={ { padding: 10 } }
                        accessible={true}
                        accessibilityTraits="button"
                        onPress={() => this.onDatePress('date', 'today') }
                    >
                        <Text style={ { fontSize: 24, fontWeight: this.state.date === 'today' ? '700' : '200' } }>Today</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ { padding: 10 } }
                        accessible={true}
                        accessibilityTraits="button"
                        onPress={() => this.onDatePress('date', 'yesterday') }
                    >
                        <Text style={ { fontSize: 24, fontWeight: this.state.date === 'yesterday' ? '700' : '200' } }>Yesterday</Text>
                    </TouchableOpacity>
                </View>

                <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={ { paddingRight: 10, paddingLeft: 10, fontSize: 24, fontWeight: '200' }}>I've</Text>

                    <TouchableOpacity style={ { padding: 10 } }
                        accessible={true}
                        accessibilityTraits="button"
                        onPress={() => this.onDatePress('type', 'spent') }
                    >
                        <Text style={ { fontSize: 24, fontWeight: this.state.type === 'spent' ? '700' : '200' } }>spent</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ { padding: 10 } }
                        accessible={true}
                        accessibilityTraits="button"
                        onPress={() => this.onDatePress('type', 'received') }
                    >
                        <Text style={ { fontSize: 24, fontWeight: this.state.type === 'received' ? '700' : '200' } }>received</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ { padding: 10 } }
                        accessible={true}
                        accessibilityTraits="button"
                        onPress={() => this.onDatePress('type', 'saved') }
                    >
                        <Text style={ { fontSize: 24, fontWeight: this.state.type === 'saved' ? '700' : '200' } }>saved</Text>
                    </TouchableOpacity>
                </View>

                <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                    <Text style={ { paddingRight: 10, paddingLeft: 10, fontSize: 24, fontWeight: '200' }}>€</Text>
                    <TextInput
                        style={{
                            height: 40, width: 'auto', borderColor: 'transparent', borderWidth: 0,
                            fontSize: 24,
                            fontWeight: '700',
                        }}
                        onChangeText={(amount) => this.setState({amount})}
                       placeholder="0.00"
                       keyboardType="numeric"
                       value={this.state.amount}
                    />
                </View>

                <ScrollView contentContainerStyle={ { }}
                    horizontal
                >
                    <View style={ { width: Dimensions.get('window').width / 4.5 }}>
                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Supermarket') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🛒</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Supermarket' ? '700' : '200' } }>Supermarket</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Restaurants') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🍴</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Restaurants' ? '700' : '200' } }>Restaurants</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ { width: Dimensions.get('window').width / 4.5 }}>
                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Drinks') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🍻</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Drinks' ? '700' : '200' } }>Drinks & Snacks</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Transports') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🚌</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Transports' ? '700' : '200' } }>Transports</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={ { width: Dimensions.get('window').width / 4.5 }}>
                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Uber') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🚗</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Uber' ? '700' : '200' } }>Uber</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Fun') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🎭</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Fun' ? '700' : '200' } }>Fun</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={ { width: Dimensions.get('window').width / 4.5 }}>
                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'House') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🏡</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'House' ? '700' : '200' } }>House</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Clothes') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>👕</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Clothes' ? '700' : '200' } }>Clothes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={ { width: Dimensions.get('window').width / 4.5 }}>
                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Health') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🏥</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Health' ? '700' : '200' } }>Health</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ { padding: 10 } }
                            accessible={true}
                            accessibilityTraits="button"
                            onPress={() => this.onDatePress('category', 'Digital') }
                        >
                            <Text style={ { fontSize: 24, textAlign: 'center', fontWeight: this.state.type === 'spent' ? '700' : '200' } }>🌐</Text>
                            <Text style={ { fontSize: 9, textAlign: 'center', fontWeight: this.state.category === 'Digital' ? '700' : '200' } }>Digital</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <Button onPress={ this.addMovement } title="Done" />

                { this.state.submitMsg }
            </View>
        )
    }

    addMovement() {
        if (!this.state.amount && !this.state.category) {
            return this.setState({
                submitMsg: <Text style={ { textAlign: 'center', color: 'red' }}>Please add an amount and category first</Text>
            })
        }

        if (!this.state.amount) {
            return this.setState({
                submitMsg: <Text style={ { textAlign: 'center', color: 'red' }}>Please add an amount</Text>
            })
        }

        if (!this.state.category) {
            return this.setState({
                submitMsg: <Text style={ { textAlign: 'center', color: 'red' }}>Where did you {this.state.type} €{this.state.amount}?</Text>
            })
        }

        return this.setState({
            submitMsg: <Text style={ { textAlign: 'center', color: 'green' }}>Success! €{this.state.amount} {this.state.type} on {this.state.category}!</Text>
        })
    }

    onDatePress(type, value) {
        if (this.state[type] === value) {
            return false;
        }

        this.setState({ [type]: value })
    }
}
