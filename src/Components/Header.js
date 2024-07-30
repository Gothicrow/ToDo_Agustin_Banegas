import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button2 from './Button2'
import { colors } from '../Global/colors'

const Header = ({ navigation, route, idProduct, onSubmitForm, fn }) => {

  return (
    <View style={styles.container}>
      <Button2 icon={route.name == "Home" ? "refresh" : "arrow-left"} action={() => route.name == "Home" ? fn() : navigation.navigate("Home")} />
      <Text style={styles.title}>{`${route.name}`}</Text>
      <Button2 icon={route.name == "Home" ? "plus" : route.name == "Details" ? "pencil" : route.name == "Form" ? "save" : ""} action={() => route.name == "Home" ? navigation.navigate("Form", { idProduct: null }) : route.name == "Details" ? navigation.navigate("Form", { idProduct: idProduct }) : route.name == "Form" ? onSubmitForm() : false} />
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
    borderBottomColor: colors.color3,
    marginTop: 25
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.color1
  }
})