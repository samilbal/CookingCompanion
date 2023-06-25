import React from "react"
import { Button } from "react-native"
import { Text, View } from "react-native"
import { StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import Card from "../components/Card"
import { ScrollView } from "react-native"

const Favorites = ({ navigation }) => {
  const currentFavorites = useSelector((state) => state.favorites)
  // console.log(currentFavorites)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites: </Text>
      <ScrollView style={{ gap: 8 }} fadingEdgeLength={50}>
        {Object.keys(currentFavorites).map((key) => (
          <Card navigation={navigation} item={currentFavorites[key]} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textTransform: "capitalize",
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 500,
  },
})

export default Favorites
