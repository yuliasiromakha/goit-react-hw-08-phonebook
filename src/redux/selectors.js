// selectors.js
export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectProfile = state => state.auth.profile;
export const selectIsRefreshing = state => state.auth.isLoading;
export const selectAuth = state => state.auth;