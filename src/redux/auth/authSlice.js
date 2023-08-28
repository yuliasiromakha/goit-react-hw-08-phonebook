// authSlice.js
import { refreshUser, logOutThunk, loginThunk, signUpThunk } from './authThunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  profile: null,
  userName: null,
  userEmail: null,
  isLoggedIn: null,
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.profile = payload;
  state.userName = payload.user.name;
  state.userEmail = payload.user.email;
  state.isLoggedIn = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
  state.isLoggedIn = true;
};

const handleFulfilledLogout = state => {
  state.isLoading = false;
  state.error = '';
  state.token = '';
  state.userName = null;
  state.userEmail = null;
  state.profile = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(refreshUser.fulfilled, handleFulfilledProfile)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogout)
      .addMatcher(
        isAnyOf(loginThunk.pending, refreshUser.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, refreshUser.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;