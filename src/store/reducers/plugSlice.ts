import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showDCFC: true,
  showACSC: true,
  //DC
  chademo: true,
  ccs2: true,
  ccs1: true,
  gbt: true,
  tesla: true,
  //AC
  j1772T1: true,
  gbtSlow: true,
  mennekesT2: true,
  //AC home
  industrialSocket: true,
  bs1363: true,
  //exclusive
  excludeExclusive: false
};

export const plugSlice = createSlice({
  name: 'plugs',
  initialState: initialState,
  reducers: {
    changeShowDCFC: (state) => {
      const newDCFC = !state.showDCFC;
      state.showDCFC = !state.showDCFC;
      if (newDCFC && state.showACSC) {
        state.chademo = true;
        state.ccs1 = true;
        state.ccs2 = true;
        state.gbt = true;
        state.tesla = true;

        state.j1772T1 = true;
        state.mennekesT2 = true;
        state.gbtSlow = true;
        state.bs1363 = true;
        state.industrialSocket = true;
      } else if (!newDCFC && state.showACSC){
        state.chademo = false;
        state.ccs1 = false;
        state.ccs2 = false;
        state.gbt = false;
        state.tesla = false;

        state.j1772T1 = true;
        state.mennekesT2 = true;
        state.gbtSlow = true;
        state.bs1363 = true;
        state.industrialSocket = true;
      } else if(newDCFC && !state.showACSC) {
        state.chademo = true;
        state.ccs1 = true;
        state.ccs2 = true;
        state.gbt = true;
        state.tesla = true;

        state.j1772T1 = false;
        state.mennekesT2 = false;
        state.gbtSlow = false;
        state.bs1363 = false;
        state.industrialSocket = false;
      }
    }, 
    changeShowACSC: (state) => {
      const newACSC = !state.showACSC;
      state.showACSC = !state.showACSC;
      if (newACSC && state.showDCFC) {
        state.chademo = true;
        state.ccs1 = true;
        state.ccs2 = true;
        state.gbt = true;
        state.tesla = true;

        state.j1772T1 = true;
        state.mennekesT2 = true;
        state.gbtSlow = true;
        state.bs1363 = true;
        state.industrialSocket = true;
      } else if (!newACSC && state.showDCFC){
        state.chademo = true;
        state.ccs1 = true;
        state.ccs2 = true;
        state.gbt = true;
        state.tesla = true;

        state.j1772T1 = false;
        state.mennekesT2 = false;
        state.gbtSlow = false;
        state.bs1363 = false;
        state.industrialSocket = false;
      } else if (newACSC && !state.showDCFC){
        state.chademo = false;
        state.ccs1 = false;
        state.ccs2 = false;
        state.gbt = false;
        state.tesla = false;

        state.j1772T1 = true;
        state.mennekesT2 = true;
        state.gbtSlow = true;
        state.bs1363 = true;
        state.industrialSocket = true;
      }
    },
    changeChademo: (state) => {
      state.chademo = !state.chademo;
    },
    changeCcs2: (state) => {
      state.ccs2 = !state.ccs2;
    },
    changeCcs1: (state) => {
      state.ccs1 = !state.ccs1;
    },
    changeGbt: (state) => {
      state.gbt = !state.gbt;
    },
    changeTesla: (state) => {
      state.tesla = !state.tesla;
    },
    changeJ1772T1: (state) => {
      state.j1772T1 = !state.j1772T1;
    },
    changeGbtSlow: (state) => {
      state.gbtSlow = !state.gbtSlow;
    },
    changeMennekesT2: (state) => {
      state.mennekesT2 = !state.mennekesT2;
    },
    changeIndustrialSocket: (state) => {
      state.industrialSocket = !state.industrialSocket;
    },
    changeBs1363: (state) => {
      state.bs1363 = !state.bs1363;
    },
    changeExcludeExclusive: (state) => {
      state.excludeExclusive = !state.excludeExclusive;
    }
  }
});

export const { changeShowDCFC, changeShowACSC, changeChademo,
  changeCcs2, changeCcs1, changeGbt, changeJ1772T1, changeGbtSlow, changeTesla,
  changeMennekesT2, changeIndustrialSocket, changeBs1363, changeExcludeExclusive } = plugSlice.actions;

export default plugSlice.reducer;