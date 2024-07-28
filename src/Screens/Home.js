import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import Filters from '../Components/Filters'
import Card from '../Components/Card.js'
import { palettes } from '../Global/palettes'
import { useGetTasksQuery } from '../services/taskService'

const Home = ({ navigation, route }) => {
  
  const { data } = useGetTasksQuery()

  console.log(data)

  return (
    <ScrollView style={styles.container}>
      <Header text="Tareas" navigation={navigation} route={route} />
      <Filters text="Tareas" navigation={navigation} />
      {
        data ?
          data.map(t => (
            <Card key={`${Math.random() + data.indexOf(t)}`} navigation={navigation} t={t} />
          )) : null
      }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: palettes["blue"].color4
  },
  flatlist: {
    width: "100%",
    marginTop: 10,
  }
})