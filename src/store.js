import { configureStore } from '@reduxjs/toolkit';
import symptomsReducer from './SymtomsSlice';

const store = configureStore({
  reducer: {
    symptoms: symptomsReducer,
  },
});

export default store;
