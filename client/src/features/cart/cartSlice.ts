import { createSlice } from '@reduxjs/toolkit'
import { ProductCart } from '../../types/products'

interface Cart {
  cart: ProductCart[]
}

const initialState: Cart = {
  cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addCart: (state, action) => {
        const cartRaw = localStorage.getItem('cart')
        const cart: ProductCart[] = cartRaw && cartRaw.length > 0 ? JSON.parse(cartRaw) : [] 
        const index = cart.findIndex(car => car._id === action.payload._id)
        if(index !== -1) {
          cart.splice(index, 1, action.payload)
          localStorage.setItem('cart', JSON.stringify(cart))
          state.cart.splice(index, 1, action.payload)
        } else {
          const newCart = [...cart, action.payload]
          localStorage.setItem('cart', JSON.stringify(newCart))
          state.cart.push(action.payload)
        }
      },
      getCart: (state, action) => {
        const cartRaw = localStorage.getItem('cart')
        const newCart: ProductCart[] = cartRaw && cartRaw.length > 0 ? JSON.parse(cartRaw) : []
        state.cart = newCart
      },
      updateCart: (state, action) => {
        const newCart = action.payload
        localStorage.setItem('cart', JSON.stringify(newCart))
        state.cart = newCart
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addCart, getCart, updateCart } = cartSlice.actions
  
  export default cartSlice.reducer