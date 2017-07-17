//
// // let activeFilters = [];
//
// const filters = ( state = {} , action ) => {
// 	switch ( action.type ) {
//
// 		case 'EDIT_FILTER':
// 			// console.log(" edit filter - action", action);
// 			// console.log(" edit filter - state", state);
//
// 			let field = action.payload.name
// 			let value = action.payload.value
// 			let updatedState
//
// 			updatedState = Object.assign( {}, state, {
// 				[field]: value
// 			})
// 			console.log("updatedState", updatedState);
//
// 			return updatedState
//
//
//
// 		// case 'ADD_FILTER':
// 		// 	console.log(" add filter - state", state);
// 		// 	return state
// 		//
// 		// case 'UPDATE_FILTER':
// 		// 	console.log(" update  filter - state", state);
// 		// 	return state
// 		//
// 		case 'CLEAR_FILTER':
// 			console.log("clear all - state", state);
// 			// console.log("action", action.payload);
// 			return state = {}
//
// 		default:
// 			return state
//
// 	}
// }
//
// export default filters;