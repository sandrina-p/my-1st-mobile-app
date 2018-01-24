import { NavigationActions } from 'react-navigation';
import { StackNavigator } from '../../../config/routers';

const initialState = StackNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, actions) => {
    const nextState = StackNavigator.router.getStateForAction(actions, state);

    return nextState || state;
}
