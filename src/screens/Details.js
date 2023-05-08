import React from "react"
import { View, StyleSheet, ImageBackground } from "react-native"
import { Text } from "react-native-elements"
import Ingredients from "../components/Ingredients"
import initialToUppercase from "../functions/initialToUppercase"
import Instructions from "../components/Instructions"

const Details = ({ route, navigation }) => {
  const { item } = route.params
  console.log(item.recipe)
  console.log(item.url)

  let url = ""
  item.images.LARGE ? (url = item.images.LARGE.url) : (url = item.image)
  return (
    <View
      key={(item) => {
        return item
      }}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: url }}
        resizeMode="cover"
      >
        <Text style={styles.dishType}>{item.dishType[0]}</Text>
        <Instructions instructions={item.instructions} />
      </ImageBackground>
      <View style={styles.container}>
        <Text> {item.label} </Text>
        <Text> Ingredients: </Text>
        <View>
          <Ingredients ingredientLines={item.ingredientLines} />
        </View>
      </View>
      <View style={styles.container}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 250,
    // borderWidth: 1,
    // borderColor: "black",
    justifyContent: "space-between",
  },
  dishType: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: 800,
    fontSize: 24,
    marginBottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 12,
    borderTopRightRadius: 20,
    alignSelf: "flex-start",
  },
  container: {
    borderColor: "black",
    borderWidth: 1,
  },
})

export default Details
