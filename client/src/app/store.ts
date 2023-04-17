import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoritesSlice'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'
import alertReducer from '../features/alert/alertSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
    auth: authReducer,
    alert: alertReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch