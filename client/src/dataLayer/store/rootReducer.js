import { combineReducers } from '@reduxjs/toolkit';
import filterDataSheetReducer from '../components/filterDataSheet/filterDataSheetReducer';
import inventoryCountReducer from '../components/inventoryCount/inventoryCountReducer';
import averageMSRPReducer from '../components/averageMSRP/averageMSRPReducer';

const rootReducer = combineReducers({
	filterDataSheet: filterDataSheetReducer,
	inventoryCount: inventoryCountReducer,
	averageMSRP: averageMSRPReducer,
});

export default rootReducer;
