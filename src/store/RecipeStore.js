import {
  createSlice,
  configureStore,
  MiddlewareArray,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"

const recipeSlice = createSlice({
  name: "recipe",
  initialState: { favorites: {} },
  reducers: {
    favorite: (state, action) => {
      console.log(state.favorites)
      const recipe = action.payload.recipe
      state.favorites = {
        ...state.favorites,
        [recipe.label]: recipe,
      }
    },
    add: (state, action) => {
      const { query } = action.payload.payload
      const { recipes } = action.payload.payload

      state.data = {
        ...state.data,
        [query]: recipes,
      }
    },
  },
})

const RecipeStore = configureStore({
  reducer: recipeSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const { add, favorite } = recipeSlice.actions

export default RecipeStore
