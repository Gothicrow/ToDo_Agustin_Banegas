import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../Global/colors';

const Button3 = ({ text, icon, action }) => {
    return (
        <TouchableHighlight onPress={() => false} style={styles.touchable} underlayColor={colors["blue"].color2}>
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
        backgroundColor: colors["blue"].color3,
        borderColor: colors["blue"].color1,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors["blue"].color1
    },
    icon: {
        fontSize: 22,
        color: colors["blue"].color1
    }
})