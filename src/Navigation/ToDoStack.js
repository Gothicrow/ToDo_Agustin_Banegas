import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Details from '../Screens/Details'
import Form from '../Screens/Form'

const Stack = createNativeStackNavigator()

const ToDoStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={
                ({ route }) => (
                    {
                        header: () => null
                    }
                )
            }
        >
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
    )
}

export default ToDoStack

const styles = StyleSheet.create({})