import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';
import { findBestLanguageTag, getCountry, getTemperatureUnit, uses24HourClock } from 'react-native-localize';

const initialState = {
  theme: 'blue',
  country: getCountry(),
  isGuideComplete: false,
  dateFormat: 'yyyy-MM-dd',
  timeFormat: 'hh:mm:ss a',
  uses24clock: uses24HourClock(),
  temperatureUnit: getTemperatureUnit(),
  isDark: Appearance.getColorScheme() === 'dark',
  language: findBestLanguageTag(['en', 'hi', 'ru', 'si', 'ta', 'zh'])?.languageTag ?? 'en',
  textShadowEnabled: true,
  boxShadowEnabled: true
};

export const configSlice = createSlice({
  name: 'config',
  initialState: initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action?.payload;
    },
    updateIsDark: (state, action) => {
      state.isDark = action?.payload;
    },
    updateLanguage: (state, action) => {
      state.language = action?.payload;
    },
    updateTemperatureUnit: (state, action) => {
      state.temperatureUnit = action?.payload;
    },
    updateGuideCompletion: (state) => {
      state.isGuideComplete = true;
    },
    updateBoxShadow: (state) => {
      state.textShadowEnabled = !state.textShadowEnabled;
    },
    updateTextShadow: (state) => {
      state.boxShadowEnabled = !state?.boxShadowEnabled;
    }
  }
});

export const { updateTheme, updateGuideCompletion, updateIsDark, updateLanguage, updateTemperatureUnit, updateBoxShadow, updateTextShadow } = configSlice.actions;

export default configSlice.reducer;