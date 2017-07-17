
// ------------------------------------
// Constants
// ------------------------------------
import { ADD, EDIT_FILTER } from '../constants';

// // ------------------------------------
// // MOCK DATA
// // ------------------------------------
// import { DATA } from '../mockData'
// // INITIAL STATE
// let data = DATA;


// ------------------------------------
// Actions
// ------------------------------------
export const updateData = ( item ) => {
	console.log( 'updateData - item', item);

	return {
		// type: 'add',
		type: ADD,
		item,
	}
}

export const editFilter = ( filter ) => {
	// console.log("filter ", filter);
	return {
		type: EDIT_FILTER,
		payload: filter,
	}
}

