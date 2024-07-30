import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Landing from '../Screens/Landing'
import Home from '../Screens/Home'
import Form from '../Screens/Form'
import Details from '../Screens/Details'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import AuthStack from './AuthStack'
import ToDoStack from './ToDoStack'
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    const user = useSelector(state => state.usersSlice.value.user)
    return (
        <NavigationContainer>
            {
                user ?
                <AuthStack />
                :
                <ToDoStack />
            }
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})