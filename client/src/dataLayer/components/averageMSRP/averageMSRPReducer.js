import { createReducer } from '@reduxjs/toolkit';
import { setMSRPGraphData, setSelectedMSRP } from './averageMSRPAction';

const initialState = {
  graphData: [],
  selectedMSRP: 'new',
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setMSRPGraphData, (state, action) => {
    state.graphData = action.payload;
  });
  builder.addCase(setSelectedMSRP, (state, action) => {
    state.selectedMSRP = action.payload;
  });
});
