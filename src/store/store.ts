import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/register/registerSlice'; 
import loginReducer from '../features/login/loginSlice';
import groceryReducer from '../features/groceryItem/catelogSlice'; 

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    grocery: groceryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
