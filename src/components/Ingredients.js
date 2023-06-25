import React from "react"
import { FlatList, Text, StyleSheet } from "react-native"

const Ingredients = ({ ingredientLines }) => {
  return ingredientLines.map((ingredient) => (
    <Text style={styles.ingredient}>
      {"\u2B24"} {ingredient}
    </Text>
  ))
}

const styles = StyleSheet.create({
  ingredient: {
    fontSize: 14,
    textTransform: "capitalize",
  },
})

export default Ingredients
