import React from "react"
import { Button } from "react-native"
import { Text, View } from "react-native"
import { StyleSheet } from "react-native"

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Settings
