import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ AVERAGE MSRP ]';

const ACTIONS = {
	setMSRPGraphData: `${MODULE_PREFIX} setMSRPGraphData`,
	setSelectedMSRP: `${MODULE_PREFIX} setSelectedMSRP`,
	setIsMSRPGraphDataLoading: `${MODULE_PREFIX} setIsMSRPGraphDataLoading`,
};

export const setMSRPGraphData = createAction(ACTIONS.setMSRPGraphData);
export const setSelectedMSRP = createAction(ACTIONS.setSelectedMSRP);
export const setIsMSRPGraphDataLoading = createAction(ACTIONS.setIsMSRPGraphDataLoading);
