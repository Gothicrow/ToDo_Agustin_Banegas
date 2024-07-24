import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button1 from './Button1'
import { colors } from '../Global/colors'

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.viewUp}>
          <Text style={styles.title}>Crear una card para el inicio</Text>
          <Button1 text={"Ver"} />
        </View>
        <View style={styles.viewDown}>
          <Text style={styles.descripcion}>Aca es donde va la descripcion de la tarea a realizar.</Text>
          <View style={styles.adjuntos}>
            <Text style={styles.adjuntosText}>20 adjuntos</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    marginVertical: 5
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: colors["blue"].color4,
    borderColor: colors["blue"].color1,
  },
  viewUp: {
    flexDirection: "row",
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "space-between"
  },
  viewDown: {
    flexDirection: "row",
    height: 80,
    width: 300,
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 18,
    width: 230,
    color: colors["blue"].color1
  },
  descripcion: {
    fontSize: 14,
    width: 210,
    color: colors["blue"].color2
  },
  adjuntos: {
    height: "70%",
    justifyContent: "flex-end",
  },
  adjuntosText: {
    fontSize: 14,
    color: colors["blue"].color2
  }
})