import { get } from 'lodash-es';

export const getSelectedInventoryGraphData = ( state) => {
  const data = get(state, 'inventoryCount.graphData', []);
  return data;
};

export const getSelectedInventory = (state) => {
  const data = get(state, 'inventoryCount.selectedInventory', 'new');
  return data;
};
