import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ INVENTORY COUNT ]';

const ACTIONS = {
	setInventoryGraphData: `${MODULE_PREFIX} setInventoryGraphData`,
	setSelectedInventory: `${MODULE_PREFIX} setSelectedInventory`,
	setIsInventoryGraphDataLoading: `${MODULE_PREFIX} setIsInventoryGraphDataLoading`,
};

export const setInventoryGraphData = createAction(ACTIONS.setInventoryGraphData);
export const setSelectedInventory = createAction(ACTIONS.setSelectedInventory);
export const setIsInventoryGraphDataLoading = createAction(ACTIONS.setIsInventoryGraphDataLoading);
