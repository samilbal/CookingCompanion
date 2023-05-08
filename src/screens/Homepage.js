import React, { useState, useEffect } from "react"
import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native"
import { Text, View } from "react-native"
import { StyleSheet } from "react-native"
import RecipeService from "../api/RecipeService"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../store/RecipeStore"
import Details from "./Details"
import Card from "../components/Card"
import initialToUppercase from "../functions/initialToUppercase"

const Homepage = ({ navigation }) => {
  const dispatch = useDispatch()
  const recipesArr = []

  const fetchThings = (query) => {
    RecipeService.getRecipes(`${query}`)
      .then((results) => {
        let recipes = []
        for (let index = 0; index < results.length; index++) {
          const element = results[index]
          recipes.push(element.recipe)
        }

        dispatch(add({ type: "add", payload: { query, recipes } }))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // useEffect(() => {
  //   RecipeService.getRecipes("potato")
  //     .then((results) => {
  //       for (let index = 0; index < results.length; index++) {
  //         const element = results[index]
  //         recipesArr.push(element.recipe)
  //       }
  //       // console.log(recipesArr)
  //       dispatch(
  //         add({
  //           type: "add",
  //           payload: { query: "potato", recipes: recipesArr },
  //         })
  //       )
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  //   // fetchThings("potato")
  //   // setLoading(false)
  //   // setRecipes(allRecipeArrs)
  // }, [])

  useEffect(() => {
    fetchThings("breakfast")
  }, [])

  const currentData = useSelector((state) => state)
  // console.log(currentDat*a.data)

  return (
    <>
      {/* <Button title="query potato" onPress={() => fetchThings("sauce")} />
      <Button
        title="clg titles"
        onPress={() => console.log(currentData.data.tomato[3].label)}
      /> */}
      <View style={styles.container}>
        {currentData.data ? (
          <ScrollView>
            {Object.keys(currentData.data).map((key) => (
              <View
                key={(item, index) => {
                  return item
                }}
              >
                <Text style={{ textTransform: "capitalize" }}>{key}</Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  scrollToOverflowEnabled
                  horizontal
                  keyExtractor={(item, index) => {
                    return item.label
                  }}
                  data={currentData.data[key]}
                  renderItem={(item) => (
                    <Card navigation={navigation} item={item.item} />
                  )}
                />
              </View>
            ))}
          </ScrollView>
        ) : null}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
})

export default Homepage

{
  /* <FlatList
showsHorizontalScrollIndicator={false}
horizontal
data={currentData.data.tomato}
renderItem={(item) => (
  <Card navigation={navigation} item={item.item} />
)}
/> */
}
