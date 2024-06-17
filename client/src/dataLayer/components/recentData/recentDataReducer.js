import { createReducer } from '@reduxjs/toolkit';
import { setIsRecentDataLoading, setRecentData } from './recentDataAction';

const initialState = {
  data: [],
  isLoading: false
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setRecentData, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(setIsRecentDataLoading, (state, action) => {
    state.isLoading = action.payload;
  });
});
