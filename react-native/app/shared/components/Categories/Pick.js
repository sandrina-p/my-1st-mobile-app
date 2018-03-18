import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Category from './Category';

const Container = styled.ScrollView``;

const Column = styled.View`
    width: ${Dimensions.get('window').width / 4};
`;

const addCategID = 999;

class Pick extends Component {
    constructor(props) {
        super(props);

        this.onCategoryPress = this.onCategoryPress.bind(this);

        this.state = {
            categoryID: null,
        };
    }

    render() {
        const { categories, order } = this.props;
        const { categoryID } = this.state;

        return (
            <Container keyboardShouldPersistTaps="always" horizontal>
                {order.map((column, i) =>
                    <Column key={ i }>
                        {column.map((id, ii) => {
                            const categId = categories[id];
                            return (
                                <Category key={ ii }
                                    name={ categId.name }
                                    icon={ categId.icon }
                                    isActive={ categoryID === id }
                                    onPress={ () => this.onCategoryPress(id, categId.name ) }
                                />
                            );
                        })}
                    </Column>
                )}
            </Container>
        );
    }

    onCategoryPress(id, name) {
        if (id === this.state.categoryID || id === addCategID ) {
            return false;
        }

        this.setState({ categoryID: id });

        this.props.onCategoryChange({ id, name });
    }
}

function chunkArray(a, l) {
    if (a.length == 0) return [];
    else return [a.slice(0, l)].concat(chunkArray(a.slice(l), l));
}

const addCat = {
    [addCategID]: {
        name: 'add',
        icon: '➕',
    }
};

// TODO: Decide EXPENSE VS INCOME
const mapStateToProps = (state) => ({
    categories: {...state.categories.expenses, ...addCat },
    order: chunkArray([...state.categories.expensesOrder, addCategID], 2),
});

export {
    mapStateToProps,
};

export default connect(mapStateToProps)(Pick);
