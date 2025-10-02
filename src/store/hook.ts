import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/register/registerSlice'; 

export const store = configureStore({
  reducer: {
    register: registerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;