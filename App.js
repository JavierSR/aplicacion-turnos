import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/home'
import Scan from './components/scan'
import Turn from './components/turn'

const Stack = createStackNavigator();

export default class extends Component {
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName = "Home"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        name="Scan"
                        component={Scan}
                    />
                    <Stack.Screen
                        name="Turn"
                        component={Turn}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
