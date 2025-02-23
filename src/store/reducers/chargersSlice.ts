import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chargers: []
};

export const chargersSlice = createSlice({
  name: 'chargers',
  initialState: initialState,
  reducers: {
    updateChargers: (state, action) => {
      state.chargers = action?.payload?.chargers;
    }
  }
});

export const { updateChargers } = chargersSlice.actions;

export default chargersSlice.reducer;