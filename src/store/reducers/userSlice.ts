import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: null,
  email: null,
  createdAt: null,
  accessToken: null,
  expirationTime: 0,
  refreshToken: null,
  authenticated: false,
  emailVerified: false,
  firstName: null,
  lastName: null,
  phoneNumber: null,
  myVehicles: [],
};

export const locationSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    onLoginState: (state, action) => {
      state.authenticated = true;
      state.uid = action.payload?.uid;
      state.email = action.payload?.email;
      state.createdAt = action.payload?.createdAt;
      state.accessToken = action.payload?.accessToken;
      state.refreshToken = action.payload?.refreshToken;
      state.emailVerified = action.payload?.emailVerified;
      state.expirationTime = action.payload?.expirationTime;
    },
    updateAccessTokenState: (state, action) => {
      state.accessToken = action.payload;
    },
    onLogoutState: (state) => {
      state.uid = null;
      state.email = null;
      state.createdAt = null;
      state.accessToken = null;
      state.expirationTime = 0;
      state.refreshToken = null;
      state.authenticated = false;
      state.emailVerified = false;
    },
    onProfileLoad: (state, action) => {
      state.firstName = action.payload?.firstName;
      state.lastName = action.payload?.lastName;
      state.phoneNumber = action.payload?.phoneNumber;
      state.email = action.payload?.email;
      state.myVehicles = action.payload?.myVehicles || [];
    }
  }
});

export const { onLoginState, updateAccessTokenState, onLogoutState, onProfileLoad } = locationSlice.actions;

export default locationSlice.reducer;