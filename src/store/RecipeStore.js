import {
  createSlice,
  configureStore,
  MiddlewareArray,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {},
  reducers: {
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
export const { add } = recipeSlice.actions

export default RecipeStore
