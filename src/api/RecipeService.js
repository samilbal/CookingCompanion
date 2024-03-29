import Edam from "./Edam"

class RecipeService {
  async getRecipes(query) {
    try {
      const response = await Edam.get("", {
        params: {
          q: query,
          random: true,
        },
      })
      return response.data.hits
    } catch (error) {
      console.error(error)
    }
  }
}

export default new RecipeService()
