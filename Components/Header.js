import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button2 from './Button2'
import { colors } from '../Global/colors'

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Button2 icon={"home"} />
      <Text style={styles.title}>{text}</Text>
      <Button2 icon={"plus"} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    height: 60,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.blue.color3
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.blue.color1
  }
})