import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RegisterUser } from "../../features/shoppingSlice";

export const asyncRegisterUser = createAsyncThunk(
    'register/asyncRegisterUser', 
    async(userData: RegisterUser) =>{

        await new Promise(resolve => setTimeout(resolve, 1000));
         return userData;
    }
);


