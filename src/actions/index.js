
// ------------------------------------
// Constants
// ------------------------------------
import { ADD, EDIT_FILTER, EDIT_DATE_FILTER } from '../constants';

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
	// console.log( 'updateData - item', item);

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

export const editDateFilter = ( filter ) => {
	// console.log("filter ", filter);
	return {
		type: EDIT_DATE_FILTER,
		payload: filter,
	}
}

