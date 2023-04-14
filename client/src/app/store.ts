import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoritesSlice'
import cartReducer from '../features/favorites/cartSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch