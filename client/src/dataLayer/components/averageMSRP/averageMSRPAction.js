import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ AVERAGE MSRP ]';

const ACTIONS = {
	setMSRPGraphData: `${MODULE_PREFIX} setMSRPGraphData`,
	setSelectedMSRP: `${MODULE_PREFIX} setSelectedMSRP`,
};

export const setMSRPGraphData = createAction(ACTIONS.setMSRPGraphData);
export const setSelectedMSRP = createAction(ACTIONS.setSelectedMSRP);
