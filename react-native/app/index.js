import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from './config/routers';

import store from './store';

const App = () => (
    <Provider store={ store }>
        <StackNavigator />
    </Provider>
);

export default App;
