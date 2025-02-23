import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chargeNet: true,
  voltCharge: true,
  slam: true,
  mev: true,
  nonNetwork: true
};

export const plugSlice = createSlice({
  name: 'vendors',
  initialState: initialState,
  reducers: {
    changeChargeNet: (state) => {
      state.chargeNet = !state.chargeNet;
    },
    changeVoltCharge: (state) => {
      state.voltCharge = !state.voltCharge;
    },
    changeSlam: (state) => {
      state.slam = !state.slam;
    },
    changeMev: (state) => {
      state.mev = !state.mev;
    },
    changeNonNetwork: (state) => {
      state.nonNetwork = !state.nonNetwork;
    }
  }
});

export const { changeChargeNet, changeVoltCharge, changeSlam, changeMev, changeNonNetwork } = plugSlice.actions;

export default plugSlice.reducer;