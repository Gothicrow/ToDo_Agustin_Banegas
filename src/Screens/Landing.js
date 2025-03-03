import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button1 from '../Components/Button1'
import { colors } from '../Global/colors'

const Landing = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title} >App ToDo</Text>
        <Text style={styles.subtitle} >Agustin Banegas</Text>
      </View>
      <Button1 text="Iniciar" action={()=>navigation.navigate("Login")} />
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 160,
    backgroundColor: colors.color4
  },
  titleContainer: {
    alignItems: "center",
    gap: 10
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.color1
  },
  subtitle: {
    color: colors.color1
  }
})