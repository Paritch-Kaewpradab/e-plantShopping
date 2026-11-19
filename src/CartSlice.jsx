import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { payload: { name, cost, image } } = action
      const item = state.items.find(item => item.name == name)
      console.log("[ADDED] - ", name)
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { payload: { name } } = action
      console.log("[DELETE] - ", name)
      state.items = state.items.filter(item => item.name != name)
    },
    updateQuantity: (state, action) => {
      const { payload: { name, type } } = action
      console.log("[UPDATE] - ", name)
      const item = state.items.find(item => item.name === name)
      if (item) {
        if (type === "decrement") {
          console.log("[TYPE] - Decrement")
          if (item.quantity < 2) {
            state.items = state.items.filter(item => item.name != name) 
          } else {
            item.quantity--
          }
          
        } else if (type === "increment") {
          console.log("[TYPE] - Increment")
          item.quantity++
        }
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
