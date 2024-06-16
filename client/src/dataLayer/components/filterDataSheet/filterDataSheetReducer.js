import { createReducer } from '@reduxjs/toolkit';
import { setDurationFilter, setMakeFilter } from './filterDataSheetAction';

const initialState = {
	makeFilter: {},
    durationFilter: {},
};

export default createReducer(initialState, (builder) => {
	builder.addCase(setMakeFilter, (state, action) => {
		state.makeFilter = action.payload;
	});
	builder.addCase(setDurationFilter, (state, action) => {
		state.durationFilter = action.payload;
	});
});
