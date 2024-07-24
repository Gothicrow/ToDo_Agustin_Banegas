import { Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/colors'

const Switch = () => {

    const [status, setStatus] = useState(false)

    return (
        <Pressable onPress={() => setStatus(!status)} style={styles.container}>
            <View style={status ? styles.pointerTrue : styles.pointerFalse}></View>
        </Pressable>
    )
}

export default Switch

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 60,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors["blue"].color1
    },
    pointerTrue: {
        height: 25,
        width: 25,
        marginLeft: -30,
        backgroundColor: colors["blue"].color2,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors["blue"].color2
    },
    pointerFalse: {
        height: 25,
        width: 25,
        marginLeft: 30,
        backgroundColor: colors["blue"].color2,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors["blue"].color2
    }
})