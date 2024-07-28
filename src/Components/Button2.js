import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { palettes } from '../Global/palettes';

const Button2 = ({ icon, action }) => {

  const [isPress, setIsPress] = useState(false)

  return (
    <TouchableHighlight onPress={() => action()} style={styles.touchable} underlayColor={palettes["blue"].color2}>
      <FontAwesome name={icon} style={styles.icon} />
    </TouchableHighlight>
  )
}

export default Button2

const styles = StyleSheet.create({
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: palettes["blue"].color3,
    borderColor: palettes["blue"].color1,
  },
  icon: {
    fontSize: 30,
    color: palettes["blue"].color1
  }
})