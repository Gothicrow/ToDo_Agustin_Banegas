import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button1 from './Button1'
import { colors } from '../Global/colors'
import Button3 from './Button3'

const Filters = ({text}) => {
  return (
    <View style={styles.container}>
      <Button3 text={"Agregar"} icon={"plus"} />
      <Button3 text={"Filtrar"} icon={"filter"} />
    </View>
  )
}

export default Filters

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
    borderBottomColor: colors["blue"].color3
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors["blue"].color1
  }
})