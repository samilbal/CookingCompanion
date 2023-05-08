import React from "react"

const initialToUppercase = (string) => {
  const arr = string.split(" ")

  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default initialToUppercase
