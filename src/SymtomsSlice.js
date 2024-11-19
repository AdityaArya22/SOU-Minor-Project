import { createSlice } from '@reduxjs/toolkit';

const symptomsSlice = createSlice({
  name: 'symptoms',
  initialState: {
    symptoms: [],
    matchedSymtomps: [], // Initialize matchedSymtomps
  },
  reducers: {
    addSymptoms: (state, action) => {
      if (!state.symptoms.includes(action.payload)) {
        state.symptoms.push(action.payload);
        console.log(state.symptoms);
      }
    },
    removeSymptoms: (state, action) => {
      state.symptoms = state.symptoms.filter((symptom) => symptom !== action.payload);
    },
    matchedSymtomps: (state, action) => {
      state.matchedSymtomps = action.payload;
    },
  },
});

export const { addSymptoms, removeSymptoms, matchedSymtomps } = symptomsSlice.actions;
export default symptomsSlice.reducer;
