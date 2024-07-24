import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import Filters from '../Components/Filters'
import Card from '../Components/Card'

const Home = () => {

  const [tareas, setTareas] = useState([0,0,0,0,0,0,0])

  return (
    <ScrollView style={styles.container}>
      <Header text="Tareas" />
      <Filters text="Tareas" />
      {
        tareas.map(t=>(
          <Card key={`${tareas.indexOf(t)}`} />
        ))
      }
      {/* <FlatList
        style={styles.flatlist}
        data={[0, 0, 0, 0, 0, 0, 0]}
        renderItem={(data) => (
          <Card />
        )}
      /> */}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  flatlist: {
    width: "100%",
    marginTop: 10,
  }
})