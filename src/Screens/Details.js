import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { colors } from '../Global/colors'
import { useGetTaskByIdQuery } from '../services/taskService'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../../Redux/features/cardSlice'

const Details = ({ navigation, route }) => {

  const { data } = useGetTaskByIdQuery(route.params.idProduct)
  const dispatch = useDispatch()
  const task = useSelector(state => state.cardSlice.task)

  useEffect(()=>{
    if(data){
      dispatch(updateTask({task: data}))
    }
  },[data])

  return (
    <View style={styles.container}>
      <Header text={"Detalles"} navigation={navigation} route={route} idProduct={task ? task.id : null} />
      {
        task ?
          <ScrollView style={styles.detailsContainer}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.date}>{task.date} - {task.time}hs</Text>
            <Text style={styles.description}>{task.description}</Text>
            <Text style={styles.archive}>Archivos:</Text>
            {
              task.image === "" ?
                <Text>Sin imagen</Text> :
                <Image source={{ uri: task.image }} style={styles.image} />
            }
          </ScrollView>
          :
          <View style={styles.chargeView}>
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
    height: "100%",
    width: "100%",
    backgroundColor: colors.color4
  },
  detailsContainer: {
    width: "85%",
    marginTop: 20,
    gap: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.color1
  },
  date: {
    fontSize: 18,
    color: colors.color3
  },
  description: {
    fontSize: 22,
    color: colors.color2
  },
  archive: {
    fontSize: 18,
    color: colors.color1,
    borderBottomWidth: 1,
    borderBottomColor: colors.color3
  },
  chargeView: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
      flex: 1,
      width: 200,
      height: 400,
      resizeMode: 'contain'
  }
})