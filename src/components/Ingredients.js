import React from "react"
import { FlatList, Text } from "react-native"

const Ingredients = ({ ingredientLines }) => {
  return ingredientLines.map((ingredient) => <Text>{ingredient}</Text>)
}

export default Ingredients
