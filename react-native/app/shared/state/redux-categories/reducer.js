import * as actionTypes from './actionTypes';

const initialState = {
    expenses: {
        1: {
            name: 'Fun',
            icon: '🎭',
        },
        2: {
            name: 'Clothes',
            icon: '👕',
        },
        3: {
            name: 'Supermarket',
            icon: '🛒',
        },
        4: {
            name: 'Restaurants',
            icon: '🍴',
        },
        5: {
            name: 'Drinks',
            icon: '🍻',
        },
        6: {
            name: 'Public transports',
            icon: '🚌',
        },
        7: {
            name: 'Health',
            icon: '🏥',
        },
    },
    expensesOrder: [3, 4, 5, 6, 7, 1, 2],
    incomes: {
        // TODO ...
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_CATEGORY:
        default:
            return state;
    }
};
