import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header text="Tareas" />
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
})