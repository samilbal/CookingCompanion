import React, { useState, useEffect } from "react"
import { Button, Image, ImageBackground } from "react-native"
import { Text, View } from "react-native"
import { StyleSheet } from "react-native"
import dummyData from "../dummyData"
import RecipeService from "../api/RecipeService"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../store/RecipeStore"

const Homepage = ({ navigation }) => {
  const [data, setData] = useState({})
  const recipe = dummyData[0].recipe

  useEffect(() => {
    RecipeService.getRecipes("chicken")
      .then((results) => {
        setData({ results })
      })
      .catch((error) => {
        console.error(error)
      })

    addData
  }, [])

  const recipesArr = []

  const addData = () => {
    if (data.results) {
      console.log(data.results[0].recipe.label)

      for (let index = 0; index < data.results.length; index++) {
        const element = data.results[index]
        recipesArr.push(element.recipe)
      }

      useDispatch({ type: "add", payload: recipesArr })
    }
  }
  // console.log(recipesArr)

  return (
    <View style={styles.container}>
      <View style={styles.testContainer}>
        <ImageBackground
          source={{ uri: recipe.image }}
          style={styles.testImageBackground}
          blurRadius={3}
        >
          <Text style={styles.testText}>{recipe.label}</Text>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "blue",
    paddingTop: "50%",
  },
  testContainer: {
    flex: 0.1,
    borderColor: "blue",
    borderWidth: 1,
    // backgroundColor: "#000",
  },
  testImageBackground: {
    height: 800,
    width: 800,
  },
  testText: {
    color: "white",
    fontSize: 24,
    fontWeight: 800,
  },
})

export default Homepage
