// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getProfile, logIn, logOut, setToken, deleteToken } from "./authOperations";
// import { useSelector } from "react-redux";

// export const loginThunk = createAsyncThunk("auth/login", async (body, { dispatch }) => {
//     const data = await logIn(body)
//     dispatch(getProfileThunk())
//     return data

// })

// export const getProfileThunk = createAsyncThunk("auth/getProfile", async (_, { getState }) => {
//     const { token } = getState().auth;
    
//     if (token) {
//         setToken(token); 
//         return await getProfile();
//     }
// });

// export const logOutThunk = createAsyncThunk("auth/logout", async (body, { getState }) => {
//     // const { token } = getState().auth;
//     const { token } = useSelector(state => state.auth.token)
//     console.log('TOKEN => ', token);
//     if (token) {
//         setToken(token); 
//         const data = await logOut(body);
//         console.log('LOG OUT DATA FROM AUTHTHUNK => ', data);
//         deleteToken(); 
//     }
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, logIn, logOut, setToken, deleteToken } from "./authOperations";
import { privateInstance } from "./authOperations";

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
      const { data } = await privateInstance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });