import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserLogin } from "../../features/shoppingSlice";

export const asyncUserLogin = createAsyncThunk(
  'login/asyncUserLogin',
    async(userData: UserLogin) =>{

        await new Promise(resolve => setTimeout(resolve, 1000));
         return userData;
    }
);


