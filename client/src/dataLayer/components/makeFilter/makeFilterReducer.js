import { createReducer } from '@reduxjs/toolkit';
import { setMakeFilterOption } from './makeFilterAction';

const initialState = {
  data: [],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setMakeFilterOption, (state, action) => {
    state.data = action.payload;
  });
});
