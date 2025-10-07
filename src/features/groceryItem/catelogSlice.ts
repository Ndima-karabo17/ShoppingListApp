import { createSlice,type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { GroceryItem } from './catelog';

interface GroceryState {
  items: GroceryItem[];
}

const initialState: GroceryState = {
  items: [],
};

const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<GroceryItem, 'id'>>) => {
      state.items.push({ id: uuidv4(), ...action.payload });
    },
  },
});

export const { addItem } = grocerySlice.actions;
export default grocerySlice.reducer;
