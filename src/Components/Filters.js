import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { palettes } from '../Global/palettes'
import Button3 from './Button3'

const Filters = ({text, navigation}) => {
  return (
    <View style={styles.container}>
      <Button3 text={"Agregar"} icon={"plus"} action={()=>navigation.navigate("Form")} />
      <Button3 text={"Filtrar"} icon={"filter"} action={()=>false} />
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
    borderBottomColor: palettes["blue"].color3
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: palettes["blue"].color1
  }
})