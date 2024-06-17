import { combineReducers } from '@reduxjs/toolkit';
import filterDataSheetReducer from '../components/filterDataSheet/filterDataSheetReducer';
import inventoryCountReducer from '../components/inventoryCount/inventoryCountReducer';
import averageMSRPReducer from '../components/averageMSRP/averageMSRPReducer';
import recentDataReducer from '../components/recentData/recentDataReducer';
import makeFilterReducer from '../components/makeFilter/makeFilterReducer';

const rootReducer = combineReducers({
	filterDataSheet: filterDataSheetReducer,
	inventoryCount: inventoryCountReducer,
	averageMSRP: averageMSRPReducer,
	recentData: recentDataReducer,
	makeFilter: makeFilterReducer,
});

export default rootReducer;
