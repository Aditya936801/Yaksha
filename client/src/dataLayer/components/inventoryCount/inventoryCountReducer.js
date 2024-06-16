import { createReducer } from '@reduxjs/toolkit';
import { setInventoryGraphData, setSelectedInventory } from './inventoryCountAction';

const initialState = {
  graphData: [],
  selectedInventory: 'new',
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setInventoryGraphData, (state, action) => {
    state.graphData = action.payload;
  });
  builder.addCase(setSelectedInventory, (state, action) => {
    state.selectedInventory = action.payload;
  });
});
