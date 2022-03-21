import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { isCartOpen: false, items: [] },
  reducers: {
    toggle(state) {
      state.isCartOpen = !state.isCartOpen
    },
    addItem(state, action) {},
  },
})

const cartReducer = cartSlice.reducer
export default cartReducer
export const cartActions = cartSlice.actions
