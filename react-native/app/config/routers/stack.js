import { StackNavigator } from 'react-navigation';

import TabNavigatorWrapperScreen from '../../screens/Home/Wrapper.js';
import Chat from '../../screens/Chat';

export default StackNavigator(
    {
        Home: {
            screen: TabNavigatorWrapperScreen,
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
        headerMode: 'screen'
    }
)
