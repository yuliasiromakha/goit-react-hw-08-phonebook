import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, logIn, logOut, setToken, deleteToken, signUp } from "./authOperations";
import { instance } from "./authOperations";

export const signUpThunk = createAsyncThunk("auth/signup", async (body, thunkAPI) => {
    const data = await signUp(body);
    return data 
})

export const loginThunk = createAsyncThunk("auth/login", async (body, { dispatch }) => {
    const data = await logIn(body)
    dispatch(getProfileThunk())
    return data

})

export const getProfileThunk = createAsyncThunk("auth/getProfile", async (_, { getState }) => {
    const { token } = getState().auth;
    
    if (token) {
        setToken(token); 
        return await getProfile();
    }
});

export const logOutThunk = createAsyncThunk("auth/logout", async (_, { getState }) => {
    const { token } = getState().auth;
    
    if (token) {
        setToken(token); 
        await logOut();
        deleteToken(); 
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });