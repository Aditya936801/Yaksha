import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ INVENTORY COUNT ]';

const ACTIONS = {
	setInventoryGraphData: `${MODULE_PREFIX} setInventoryGraphData`,
	setSelectedInventory: `${MODULE_PREFIX} setSelectedInventory`,
};

export const setInventoryGraphData = createAction(ACTIONS.setInventoryGraphData);
export const setSelectedInventory = createAction(ACTIONS.setSelectedInventory);
