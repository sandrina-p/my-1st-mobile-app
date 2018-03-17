import React  from 'react';
import { Provider, connect } from 'react-redux';
import { TabNavigator, StackNavigator } from './config/routers';

import store from './store';

const App = () => <StackNavigator />;

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
