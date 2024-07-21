import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button1 = ({ text, action }) => {
  return (
    <View>
      <Button onPress={() => false} title={text} style={styles.button} />
    </View>
  )
}

export default Button1

const styles = StyleSheet.create({
  button: {
    display: "none"
  }
})