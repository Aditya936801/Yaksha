import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ FILTER DATA SHEET ]';

const ACTIONS = {
	setMakeFilter: `${MODULE_PREFIX} setMakeFilter`,
	setDurationFilter: `${MODULE_PREFIX} setDurationFilter`,
};

export const setMakeFilter = createAction(ACTIONS.setMakeFilter);
export const setDurationFilter = createAction(ACTIONS.setDurationFilter);
