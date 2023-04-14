import { createSlice } from '@reduxjs/toolkit'
import { ProductCart } from '../../types/products'

const initialState: ProductCart[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addCart: (state, action) => {
        const cartRaw = localStorage.getItem('cart')
        const cart: ProductCart[] = cartRaw && cartRaw.length > 0 ? JSON.parse(cartRaw) : [] 
        const existe = cart.filter(car => car._id === action.payload._id)
        if(existe[0]?._id === action.payload._id) {
          const filtercart = cart.map(car => car._id === action.payload._id ? action.payload : car)
          localStorage.setItem('cart', JSON.stringify(filtercart))
          state = filtercart
        } else {
          const newCart = [...cart, action.payload]
          state = newCart
          localStorage.setItem('cart', JSON.stringify(newCart))
        }
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addCart } = cartSlice.actions
  
  export default cartSlice.reducer