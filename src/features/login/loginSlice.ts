import { createSlice,type PayloadAction } from '@reduxjs/toolkit';

type LoginState = {
  isAuthenticated: boolean;
  user: {
    email: string;
  } | null;
  loading: boolean;
  error: string | null;
};

const initialState: LoginState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};


const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<{ email: string }>) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = { email: action.payload.email };
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = loginSlice.actions;

export default loginSlice.reducer;
