import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './screens/Main';
import User from './screens/User';
import Star from './screens/Star';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main: {
                screen: Main,
                navigationOptions: () => ({
                    title: 'Início',
                }),
            },
            User,
            Star,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#2196f3',
                },
                headerTintColor: '#fefefe',
            },
        }
    )
);

export default Routes;
