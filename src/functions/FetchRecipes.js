import RecipeService from "../api/RecipeService"
import { useDispatch } from "react-redux"

const fetchRecipes = (query) => {
  const dispatch = useDispatch()

  RecipeService.getRecipes(`${query}`)
    .then((results) => {
      let recipes = []
      for (let index = 0; index < results.length; index++) {
        const element = results[index]
        // allRecipeArrs[query].push(element.recipe)
        recipes.push(element.recipe)
      }
      dispatch(add({ type: "add", payload: { query, recipes } }))
    })
    .catch((error) => {
      console.error(error)
    })
}
