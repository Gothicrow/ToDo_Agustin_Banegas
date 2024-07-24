import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const SelectorColors = ({ text, action }) => {
  return (
    <TouchableHighlight onPress={() => false} style={styles.touchable} underlayColor={"none"}>
      <View style={styles.container}>
        <View style={styles.color1}></View>
        <View style={styles.color2}></View>
        <View style={styles.color3}></View>
        <View style={styles.color4}></View>
      </View>
    </TouchableHighlight>
  )
}

export default SelectorColors

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    height: 40,
    width: 100,
    borderWidth: 1,
  },
  color1: {
    height: "100%",
    width: "25%",
    backgroundColor: colors["blue"].color1
  },
  color2: {
    height: "100%",
    width: "25%",
    backgroundColor: colors["blue"].color2
  },
  color3: {
    height: "100%",
    width: "25%",
    backgroundColor: colors["blue"].color3
  },
  color4: {
    height: "100%",
    width: "25%",
    backgroundColor: colors["blue"].color4
  }
})