import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Button1 from '../Components/Button1'
import Switch from '../Components/Switch'
import { colors } from '../Global/colors'
import Button3 from '../Components/Button3'
import Button2 from '../Components/Button2'
import SelectorOptions from '../Components/SelectorOptions'
import SelectorColors from '../Components/SelectorColors'

const Settings = () => {
  return (
    <View style={styles.container}>
      <Header text={"Ajustes"} />
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <Text style={styles.textOption}>Modo oscuro</Text>
          <Switch />
        </View>
        <View style={styles.option}>
          <Text style={styles.textOption}>Colores</Text>
          <SelectorColors text={"Español"} />
        </View>
        <View style={styles.option}>
          <Text style={styles.textOption}>Lenguaje</Text>
          <SelectorOptions text={"Español"} />
        </View>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%"
  },
  optionContainer: {
    marginTop: 30,
    gap: 10
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    width: "75%"
  },
  textOption: {
    fontSize: 20,
    color: colors["blue"].color1
  }
})