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

  useEffect(() => {
    fetchThings("breakfast")
    fetchThings("lunch")
    fetchThings("snacks")
    fetchThings("dinner")
    fetchThings("drinks")
  }, [])

  const currentData = useSelector((state) => state)
  // console.log(Object.keys(currentData))

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
              <View style={styles.listContainer}>
                <Text style={styles.queries}>{key}</Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  scrollToOverflowEnabled
                  horizontal
                  data={currentData.data[key]}
                  renderItem={(item) => (
                    <Card fav navigation={navigation} item={item.item} />
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
    backgroundColor: "#ae2012",
  },
  queries: {
    textTransform: "capitalize",
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 500,
    color: "#fca311",
  },
  listContainer: {
    marginVertical: 4,
  },
})

export default Homepage
