import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../types/products'

interface Favorites {
  favs: Product[]
}

const initialState: Favorites = {
  favs: []
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      addFavorite: (state, action) => {
        const favsRaw = localStorage.getItem('favs')
        const favorites: Product[] = favsRaw && favsRaw.length > 0 ? JSON.parse(favsRaw) : []
        const index = favorites.findIndex(fav => fav._id === action.payload._id)
        if(index !== -1) {
          favorites.splice(index, 1)
          localStorage.setItem('favs', JSON.stringify(favorites))
          state.favs.splice(index, 1)
        } else {
          const newFavs = [...favorites, action.payload]
          localStorage.setItem('favs', JSON.stringify(newFavs))
          state.favs.push(action.payload)
        }
      },
      getFavorites: (state, action) => {
        const favsRaw = localStorage.getItem('favs')
        const favorites: Product[] = favsRaw && favsRaw.length > 0 ? JSON.parse(favsRaw) : []
        state.favs = favorites
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addFavorite, getFavorites } = favoritesSlice.actions
  
  export default favoritesSlice.reducer
