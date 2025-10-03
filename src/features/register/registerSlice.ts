import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface RegisterUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  cellNumber: string;
}

interface RegisterState {
  users: RegisterUser[];
}


const initialState: RegisterState = {
  users: [],
};

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
