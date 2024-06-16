import { get } from 'lodash-es';

export const getSelectedMakeFilter = (state) => {
	const data = get(state, 'filterDataSheet.makeFilter', {});
	return data;
};

export const getSelectedDurationFilter = (state) => {
	const data = get(state, 'filterDataSheet.durationFilter', {});
	return data;
};
