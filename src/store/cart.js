import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { isCartOpen: false, items: [] },
  reducers: {
    toggle(state) {
      state.isCartOpen = !state.isCartOpen
    },
    addItem(state, action) {
      const newItem = action.payload
      const existingCartItem = state.items.find(
        (item) => item.title === newItem.title
      )
      if (existingCartItem) {
        existingCartItem.quantity++
      } else {
        state.items.push(newItem)
      }
    },
    subQty(state, action) {
      const cartItem = state.items.find(
        (item) => item.title === action.payload.title
      )

      if (cartItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.title !== cartItem.title
        )
      } else {
        cartItem.quantity--
      }
    },
    addQty(state, action) {
      const cartItem = state.items.find(
        (item) => item.title === action.payload.title
      )
      cartItem.quantity++
    },
  },
})

const cartReducer = cartSlice.reducer
export default cartReducer
export const cartActions = cartSlice.actions
