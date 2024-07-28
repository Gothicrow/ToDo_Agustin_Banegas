import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Landing from '../Screens/Landing'
import Home from '../Screens/Home'
import Form from '../Screens/Form'
import Details from '../Screens/Details'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Landing'
                screenOptions={
                    ({ route }) => (
                        {
                            header: () => null
                        }
                    )
                }
            >
                <Stack.Screen
                    name="Landing"
                    component={Landing}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                />
                <Stack.Screen
                    name="Form"
                    component={Form}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})