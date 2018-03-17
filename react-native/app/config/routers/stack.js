import { StackNavigator } from 'react-navigation';

import TabNavigator from '../../screens/TabNavigator';
import Chat from '../../screens/Chat';

export default StackNavigator(
    {
        Home: {
            screen: TabNavigator,
            navigationOptions: {
                // title: 'Home',
                header: () => null,
            }

        },
        Chat: {
            screen: Chat,
            navigationOptions: {
                title: 'Chat'
            }
        }
    },
    {
        // headerMode: 'none',
        // mode: 'modal',
    }
)
