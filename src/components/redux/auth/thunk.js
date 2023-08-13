import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn } from "./operations";

export const loginThunk = createAsyncThunk("auth/login", async (body) => {
    return await logIn(body)
})