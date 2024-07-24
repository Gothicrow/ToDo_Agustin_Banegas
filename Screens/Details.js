import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import { colors } from '../Global/colors'

const Details = () => {

  const [image, setImage] = useState("")

  return (
    <View style={styles.container}>
      <Header text={"Detalles"} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Ir a comer al restaurant</Text>
        <Text style={styles.date}>13/09/23 - 12:40hs</Text>
        <Text style={styles.description}>Ir a comer una rica comida en algun lugar del mundo con el fin de complacer el apetito.</Text>
        <Text style={styles.archive}>Archivos:</Text>
        {
          image === "" ?
            <Text>Sin imagen</Text> :
            <Image source={{ uri: image }} style={styles.image} />
        }
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%"
  },
  detailsContainer: {
    width: "85%",
    marginTop: 20,
    gap: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors["blue"].color1
  },
  date: {
    fontSize: 18,
    color: colors["blue"].color3
  },
  description: {
    fontSize: 22,
    color: colors["blue"].color2
  },
  archive: {
    fontSize: 18,
    color: colors["blue"].color1,
    borderBottomWidth: 1,
    borderBottomColor: colors["blue"].color3
  },
})