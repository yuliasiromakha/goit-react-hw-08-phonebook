import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import contactReducer from "./contacts/contactSlice";
import filterReducer from './contacts/filterSlice'
import { authReducer } from "./auth/slice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["contacts"],
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactReducer),
  filter: filterReducer,
  auth: authReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default store;