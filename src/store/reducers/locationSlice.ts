import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  altitude: 0,
  accuracy: 0,
  showCompass: true,
  showTraffic: false,
  showsMyLocation: true,
  showsUserLocation: true,
  latitude: 0,
  longitude: 0
};

export const locationSlice = createSlice({
  name: 'location',
  initialState: initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.latitude = action?.payload?.latitude;
      state.altitude = action?.payload?.altitude;
      state.accuracy = action?.payload?.accuracy;
      state.longitude = action?.payload?.longitude;
    },
    updateCompass: (state) => {
      state.showCompass = !state.showCompass;
    },
    updateTraffic: (state) => {
      state.showTraffic = !state.showTraffic;
    },
    updateShowMyLocation: (state) => {
      state.showsMyLocation = !state.showsMyLocation;
    },
    updateShowUserLocation: (state) => {
      state.showsUserLocation = !state.showsUserLocation;
    }
  }
});

export const { updateLocation, updateCompass, updateTraffic, updateShowUserLocation, updateShowMyLocation } = locationSlice.actions;

export default locationSlice.reducer;