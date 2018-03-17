var accounts = {
    'a1': {
        id: 'a1',
        name: 'Pocket',
        icon: null,
        clr: '#000000',
        currency: '€',
    },
    'a2': {
        id: 2,
        name: 'Credit',
        icon: null,
        clr: '#00f'
    },
}

var categories = {
    expenses: {
        1: {
            name: 'Restaurant',
            icon: '🍴',
        },
        2: {
            name: 'Supermarket',
            icon: '🍎',
            budget: '300',
        },
    },
    incomes: {
        1: {
            name: 'salary',
            icon: '💰',
        },
        2: {
            name: 'retail',
            icon: '📺'
        },
    },
}

var expenses = { // same for incomes
    2018: {
        01: {
            1: {
                description: 'McDonalds'
                amount: 5,
                category: 1,
                timestamp: '313217631',
                tags: ['guilty'],
            },
        }
    },
    2017: {
        01: {
            1: {
                description: 'Continente'
                amount: 32,
                category: 2,
                timestamp: '32187219'
                tags: [],
            },
        }
    }
}
