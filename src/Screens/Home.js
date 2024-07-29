import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card.js'
import { colors } from '../Global/colors'
import { useGetTasksQuery } from '../services/taskService'
import { useDispatch, useSelector } from 'react-redux'
import { updateTasksArray } from '../../Redux/features/cardSlice.js'

const Home = ({ navigation, route }) => {

  const { data } = useGetTasksQuery()
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.cardSlice.tasks)

  useEffect(()=>{
    if(data){
      dispatch(updateTasksArray({newArray: data}))
    }
  },[data])

  return (
    <ScrollView style={styles.container}>
      <Header text="Tareas" navigation={navigation} route={route} />
      {
        tasks.map(t => (
          <Card key={`${Math.random() + data.indexOf(t)}`} navigation={navigation} t={t} />
        ))
      }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.color4
  },
  flatlist: {
    width: "100%",
    marginTop: 10,
  }
})