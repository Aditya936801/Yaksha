import { createReducer } from '@reduxjs/toolkit';
import { setInventoryGraphData, setIsInventoryGraphDataLoading, setSelectedInventory } from './inventoryCountAction';

const initialState = {
  graphData: [],
  selectedInventory: 'new',
  isGraphDataLoading: false
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setInventoryGraphData, (state, action) => {
    state.graphData = action.payload;
  });
  builder.addCase(setSelectedInventory, (state, action) => {
    state.selectedInventory = action.payload;
  });
  builder.addCase(setIsInventoryGraphDataLoading, (state, action) => {
    state.isGraphDataLoading = action.payload;
  });
});
