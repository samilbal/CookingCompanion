import React from "react"
import { Text } from "react-native-elements"

const Details = ({ route, navigation }) => {
  const { item } = route.params
  // console.log(item.label)
  return <Text style={{ color: "black" }}>{item.label}</Text>
}

export default Details
