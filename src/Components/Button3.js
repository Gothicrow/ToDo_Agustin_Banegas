import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { palettes } from '../Global/palettes';

const Button3 = ({ text, icon, action }) => {
    return (
        <TouchableHighlight onPress={() => action()} style={styles.touchable} underlayColor={palettes["blue"].color2}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <FontAwesome name={icon} style={styles.icon} />
            </View>
        </TouchableHighlight>
    )
}

export default Button3

const styles = StyleSheet.create({
    touchable: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: palettes["blue"].color3,
        borderColor: palettes["blue"].color1,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: palettes["blue"].color1
    },
    icon: {
        fontSize: 22,
        color: palettes["blue"].color1
    }
})