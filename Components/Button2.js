import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../Global/colors';

const Button2 = ({ icon, action }) => {
  return (
    <TouchableHighlight onPress={() => false} style={styles.touchable}>
      <Entypo name={icon} style={styles.icon} />
    </TouchableHighlight>
  )
}

export default Button2

const styles = StyleSheet.create({
  touchable: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: colors.blue.color1
  },
  icon: {
    fontSize: 30,
    color: colors.blue.color1
  }
})