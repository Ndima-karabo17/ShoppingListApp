import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// User type definition
export interface RegisterUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  cellNumber: string;
}

// Initial state type
interface RegisterState {
  users: RegisterUser[];
}

// Initial state
const initialState: RegisterState = {
  users: [],
};

// Slice definition
const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUser>) => {
      state.users.push(action.payload);
    },
  },
});

export const { registerUser } = registerSlice.actions;
export default registerSlice.reducer;
