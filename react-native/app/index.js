import React  from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { TabNavigator, StackNavigator } from './config/routers';

import store from './store';

const App = ({ dispatch, navigation }) => {
    return (
        <StackNavigator
            navigation={addNavigationHelpers({
                dispatch,
                state: navigation
            })}
        />
    )

    // return (
    //     <TabNavigator />
    // )
};

const mapStateToProps = (state) => ({
    navigation: state.navigation
});

const AppContainer = connect(mapStateToProps)(App);

export default () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);
