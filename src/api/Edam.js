import axios from "axios"

export default axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2",
  params: {
    type: "public",
    app_id: "c816c067",
    app_key: "055ddd1fc2bd43f51166e0b3532a235c",
  },
})
