import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../types/products'

const initialState: Product[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      addFavorite: (state, action) => {
        const favsRaw = localStorage.getItem('favs')
        const favorites = favsRaw && favsRaw.length > 0 ? JSON.parse(favsRaw) : []
        state = favorites
        const existe = state.filter(fav => fav._id === action.payload._id)
        if(existe[0]?._id === action.payload._id) {
          const filterFavs = state.filter(fav => fav._id !== action.payload._id)
          state = filterFavs
          localStorage.setItem('favs', JSON.stringify(filterFavs))
        } else {
          const newFavs = [...state, action.payload]
          state = [...state, action.payload]
          localStorage.setItem('favs', JSON.stringify(newFavs))
        }
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addFavorite } = favoritesSlice.actions
  
  export default favoritesSlice.reducer
