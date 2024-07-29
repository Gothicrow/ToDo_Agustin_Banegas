import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button1 from './Button1'
import { colors } from '../Global/colors'

const Card = ({ navigation, t }) => {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.viewUp}>
          <Text style={styles.title}>{t.title}</Text>
          <Button1 text={"Ver"} action={() => { navigation.navigate("Details", { idProduct: t.id }) }} />
        </View>
        <View style={styles.viewDown}>
          <Text style={styles.descripcion}>{t.description}</Text>
          <View style={styles.adjuntos}>
            <Text style={styles.adjuntosText}>{t.date}</Text>
            <Text style={styles.adjuntosText}>{t.time}hs</Text>
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
    marginTop: 10
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
    backgroundColor: colors.color4,
    borderColor: colors.color1,
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
    color: colors.color1
  },
  descripcion: {
    fontSize: 14,
    width: 210,
    color: colors.color2
  },
  adjuntos: {
    height: "70%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  adjuntosText: {
    fontSize: 14,
    color: colors.color2
  }
})