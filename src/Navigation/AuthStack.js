import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from '../Screens/Landing'
import Login from '../Screens/Login'
import Register from '../Screens/Register'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
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
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})