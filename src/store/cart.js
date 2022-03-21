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
  },
})

const cartReducer = cartSlice.reducer
export default cartReducer
export const cartActions = cartSlice.actions
