import { createReducer } from '@reduxjs/toolkit';
import { setIsMSRPGraphDataLoading, setMSRPGraphData, setSelectedMSRP } from './averageMSRPAction';

const initialState = {
  graphData: [],
  selectedMSRP: 'new',
  isGraphDataLoading:  false,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setMSRPGraphData, (state, action) => {
    state.graphData = action.payload;
  });
  builder.addCase(setSelectedMSRP, (state, action) => {
    state.selectedMSRP = action.payload;
  });
  builder.addCase(setIsMSRPGraphDataLoading, (state, action) => {
    state.isGraphDataLoading = action.payload;
  });
});
