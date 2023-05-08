import React from "react"
import { Text } from "react-native-elements"
import { Button } from "react-native-paper"

const Instructions = ({ instructions }) => {
  return (
    <Button
      icon="camera"
      mode="contained"
      style={{ width: 150, left: -20, borderBottomRightRadius: 0 }}
      contentStyle={{ flexDirection: "row-reverse" }}
    >
      Instructions
    </Button>
  )
}

export default Instructions
