import { combineReducers } from 'redux';
import dataGrid from './dataGrid';
import filters from './filters';
// import others from './others';


const rootReducer = combineReducers({
	dataGrid,
	// filters,
	// more reducers here
});

export default rootReducer;