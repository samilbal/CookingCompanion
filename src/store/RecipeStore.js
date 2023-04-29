import { createSlice, configureStore } from "@reduxjs/toolkit"

const recipeSlice = createSlice({
  name: "recipe",
  initialState: { data: {} },
  reducers: {
    add: (state, action) => {
      state.data = action.payload.payload
      console.log(state)
    },
  },
})

const RecipeStore = configureStore({
  reducer: recipeSlice.reducer,
})
export const { add } = recipeSlice.actions

export default RecipeStore
