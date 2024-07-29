import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../Global/colors';

const Button2 = ({ icon, action }) => {

  return (
    <TouchableHighlight onPress={() => action()} style={styles.touchable} underlayColor={colors.color2}>
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
    backgroundColor: colors.color3,
    borderColor: colors.color1,
  },
  icon: {
    fontSize: 30,
    color: colors.color1
  }
})