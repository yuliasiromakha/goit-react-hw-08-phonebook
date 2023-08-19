import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, logIn, logOut, setToken, deleteToken } from "./operations";

export const loginThunk = createAsyncThunk("auth/login", async (body) => {
    return await logIn(body)
})

export const getProfileThunk = createAsyncThunk("auth/getProfile", async (_, { getState }) => {
    const { token } = getState().auth;
    
    if (token) {
        setToken(token); 
        return await getProfile();
    }
});


// export const logOutThunk = createAsyncThunk("auth/logout", async (body) => {
//     return await logOut(body)
// })

export const logOutThunk = createAsyncThunk("auth/logout", async (_, { getState }) => {
    const { token } = getState().auth;
    
    if (token) {
        setToken(token); // Set the token in headers
        await logOut();
        deleteToken(); // Clear token after logout
    }
});
