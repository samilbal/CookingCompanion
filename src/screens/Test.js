import React, { useEffect, useState } from "react"
import Edam from "../api/Edam"
import { ImageBackground, Text, View, StyleSheet } from "react-native"
import { Button } from "react-native-paper"
import RecipeService from "../api/RecipeService"

const Test = ({ navigation }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    RecipeService.getRecipes("chicken")
      .then((results) => {
        // console.log(results[0].recipe.image)
        setData({ img: results[0].recipe.image })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // loop through results array and pass each item on the array as a prop to card like <Card recipe />

  console.log(data)
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: data.img }}
        style={styles.testImageBackground}
      >
        <View style={styles.testView}>
          <View style={styles.testTopContainer}>
            <Text style={styles.testTopTitle}>Midnight Ideas</Text>
          </View>
          <View style={styles.testBottomContainer}>
            <View>
              <Text style={styles.testTitle}>Kale Pesto Pasta</Text>
              <Text style={styles.testSubtitle}>Food Republic</Text>
            </View>
            <Button
              icon="heart"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={{
                width: 115,
                height: 35,
                justifyContent: "center",
                position: "relative",
                right: 40,
                top: 40,
                backgroundColor: "rgba(156,40,60,0.8)",
              }}
              contentStyle={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                height: 40,
                width: 115,
              }}
            >
              Favorite
            </Button>
            <Button
              title="go to card"
              onPress={navigation.navigate("Card", {
                recipe: data,
              })}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "50%",
    paddingLeft: "15%",
  },
  testContainer: {
    borderColor: "blue",
    borderWidth: 1,
  },
  testImageBackground: {
    height: 290,
    width: 290,
    position: "relative",
    borderRadius: 50,
  },
  testText: {
    color: "white",
    fontSize: 24,
    fontWeight: 800,
    position: "absolute",
    bottom: 10,
  },
  testTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: 500,
  },
  testSubtitle: {
    color: "white",
    fontSize: 12,
    fontWeight: 500,
  },
  testView: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "rgba(1,0,0,0.5)",
  },
  testTopContainer: {
    marginTop: 10,
    paddingLeft: 25,
    paddingVertical: 3,
    backgroundColor: "rgba(1,0,0,0.7)",
    width: 150,
    borderTopRightRadius: 12,
  },
  testTopTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: 700,
  },
  testBottomContainer: {
    paddingLeft: 25,
    paddingBottom: 35,
    backgroundColor: "rgba(19,15,26,0.4)",
    borderTopRightRadius: 24,
    flexDirection: "row",
  },
  button: {},
})

export default Test
