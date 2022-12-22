import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons' 

import { VotesScreen } from '../screens/VotesScreen'
import { WinnerScreen } from '../screens/WinnerScreen'

const {Screen, Navigator} = createBottomTabNavigator()

export function StackRoutes(){
    return(
        <Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarLabelStyle: { fontSize: 15 },
                tabBarStyle: {
                height: 70,
                paddingHorizontal: 2,
                paddingTop: 0,
                backgroundColor: 'rgba(34,36,40,1)',
                position: 'absolute',
                borderTopWidth: 0,
                },
            })}
        >
            <Screen
                name="Votes"
                component={VotesScreen}
                options={{
                  tabBarLabel: 'Votar',
                  tabBarActiveTintColor:'white',
                  tabBarIcon: ({ size }) => (
                    <MaterialCommunityIcons 
                      name="home" 
                      color="#6DFF60" 
                      size={size} 
                    />
                  ),
                }}
            />

            <Screen
                name="Ranking"
                component={WinnerScreen}
                options={{
                  tabBarLabel: 'Ranking',
                  tabBarActiveTintColor:'white',
                  tabBarIcon: ({ size }) => (
                    <MaterialCommunityIcons 
                      name="trophy" 
                      color="#6DFF60"
                      size={size} 
                    />
                  ),
                }}
            />
        </Navigator>
    )
}