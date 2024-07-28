import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { palettes } from '../Global/palettes'

const Button1 = ({ text, action }) => {

  return (
    <TouchableHighlight onPress={() => action()} style={styles.touchable} underlayColor={palettes["blue"].color2}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  )
}

export default Button1 

const styles = StyleSheet.create({
  touchable: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: palettes["blue"].color3,
    borderColor: palettes["blue"].color1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: palettes["blue"].color1
  }
})