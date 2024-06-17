import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ RECENT DATA ]';

const ACTIONS = {
	setRecentData: `${MODULE_PREFIX} setRecentData`,
	setIsRecentDataLoading: `${MODULE_PREFIX} setIsRecentDataLoading`,
};

export const setRecentData = createAction(ACTIONS.setRecentData);
export const setIsRecentDataLoading = createAction(ACTIONS.setIsRecentDataLoading);
