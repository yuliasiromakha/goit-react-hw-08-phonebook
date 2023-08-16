import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, logIn, logOut } from "./operations";

export const loginThunk = createAsyncThunk("auth/login", async (body) => {
    return await logIn(body)
})

export const getProfileThunk = createAsyncThunk("/auth/current", async (body) => {
    return await getProfile(body)
})

export const logOutThunk = createAsyncThunk("auth/logout", async (body) => {
    return await logOut(body)
})