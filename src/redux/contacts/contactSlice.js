// contactSlice.js
import {
  createContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contactThunk';
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createContact, deleteContact } from './contactOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = payload;
};

const handleAddFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = [...state.contacts, payload];
};

const handleDeleteFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    return await createContact(contact);
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    return await deleteContact(contactId);
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactAsync.pending, handlePending)
      .addCase(addContactAsync.fulfilled, (state, action) => {
        handleAddFulfilled(state, action);
      })
      .addCase(addContactAsync.rejected, handleRejected)
      .addCase(deleteContactAsync.pending, handlePending)
      .addCase(deleteContactAsync.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContactAsync.rejected, handleRejected)
      // .addCase(setFilter, (state, action) => {
      //   state.filter = action.payload;
      // })
      .addMatcher(
        isAnyOf(
          createContactThunk.rejected,
          deleteContactThunk.rejected,
          getContactsThunk.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactSlice.reducer;