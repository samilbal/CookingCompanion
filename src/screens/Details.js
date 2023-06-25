import React from "react"
import { View, StyleSheet, ImageBackground } from "react-native"
import { Text } from "react-native-elements"
import Ingredients from "../components/Ingredients"
import { Button } from "react-native-paper"
import { Linking } from "react-native"

const Details = ({ route, navigation }) => {
  const { item } = route.params
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
        <Button
          icon="open-in-new"
          mode="contained"
          style={{ width: 170, left: -20, borderBottomRightRadius: 0 }}
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() =>
            Linking.openURL(
              // the url is the same for all recipes
              "https://www.allrecipes.com/recipe/261547/chorizo-breakfast-tacos-with-potato-hash-and-eggs/"
            )
          }
        >
          Instructions
        </Button>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.subTitle}>{item.label}</Text>
        <Text style={styles.title}>Ingredients:</Text>
        <View style={styles.ingredientsContainer}>
          <Ingredients ingredientLines={item.ingredientLines} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 250,
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
    padding: 4,
    height: 440,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  subTitle: {
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: 800,
  },
  ingredientsContainer: {
    marginVertical: 8,
    justifyContent: "space-between",
    flex: 1,
  },
})

export default Details
