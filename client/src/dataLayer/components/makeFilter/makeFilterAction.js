import { createAction } from '@reduxjs/toolkit';

const MODULE_PREFIX = '[ MAKE FILTER ]';

const ACTIONS = {
	setMakeFilterOption: `${MODULE_PREFIX} setMakeFilterOption`,
	getMakeFilterOption: `${MODULE_PREFIX} getMakeFilterOption`,
};

export const setMakeFilterOption = createAction(ACTIONS.setMakeFilterOption);
export const getMakeFilterOption = createAction(ACTIONS.getMakeFilterOption);
