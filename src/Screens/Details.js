import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import { palettes } from '../Global/palettes'
import { useGetTaskByIdQuery } from '../services/taskService'

const Details = ({ navigation, route }) => {

  const { idProduct } = route.params

  console.log(typeof idProduct)

  const { data } = useGetTaskByIdQuery(idProduct)

  const image = ""

  console.log(data)

  return (
    <View style={styles.container}>
      <Header text={"Detalles"} navigation={navigation} route={route} />
      {
        data ?
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.date}>{data.date} - {data.time}hs</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.archive}>Archivos:</Text>
            {
              data.image === "" ?
                <Text>Sin imagen</Text> :
                <Image source={{ uri: image }} style={styles.image} />
            }
          </View>
          :
          <View>
            <Text style={styles.title}>Cargando...</Text>
          </View>
      }
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    backgroundColor: palettes["blue"].color4
  },
  detailsContainer: {
    width: "85%",
    marginTop: 20,
    gap: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: palettes["blue"].color1
  },
  date: {
    fontSize: 18,
    color: palettes["blue"].color3
  },
  description: {
    fontSize: 22,
    color: palettes["blue"].color2
  },
  archive: {
    fontSize: 18,
    color: palettes["blue"].color1,
    borderBottomWidth: 1,
    borderBottomColor: palettes["blue"].color3
  },
})