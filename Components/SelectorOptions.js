import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const SelectorOptions = ({ text, action }) => {
  return (
    <TouchableHighlight onPress={() => false} style={styles.touchable} underlayColor={colors["blue"].color2}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  )
}

export default SelectorOptions

const styles = StyleSheet.create({
  touchable: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: colors["blue"].color4,
    borderColor: colors["blue"].color1,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors["blue"].color1
  }
})