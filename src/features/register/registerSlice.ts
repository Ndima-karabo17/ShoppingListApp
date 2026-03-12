import { createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';

export type RegisterUser = {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  cellNumber: string;
};

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (userData: RegisterUser) => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    return await response.json();
  }
);

interface RegisterState {
  users: RegisterUser[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RegisterState = {
  users: [],
  status: 'idle',
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<RegisterUser>) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default registerSlice.reducer;
