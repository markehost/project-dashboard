// ------------------------------------
// MOCK DATA
// ------------------------------------
import { DATA } from '../mockData'
// INITIAL STATE
let mockData = DATA;


const dataGrid = ( state = { data: mockData, filteredData: [], filters: {} }, action ) => {
	switch ( action.type ) {

		case 'EDIT_DATA':
			console.log(" edit filter - state", state);
			return state


		case 'EDIT_FILTER':
			// console.log(" edit filter - action", action);
			console.log(" edit filter - state", state);

			// UPDATE FILTERS
			let field = action.payload.name
			let value = action.payload.value
			let updatedFilters

			// ADD FILTER TO FILTER OBJECT
			if ( value !== '' ) {
				updatedFilters = Object.assign( {}, state.filters, {
					[field]: value
				})

				// REMOVE FILTER IF EMPTY
			} else {
				let copy = Object.assign( {}, state.filters )
				delete copy[field]
				updatedFilters = copy
			}

			console.log("updatedFilters", updatedFilters);


			// FILTER THE DATA
			// let filterKeys = Object.keys( state.filters )
			let filterKeys = Object.keys( updatedFilters )
			console.log("filterKeys", filterKeys);
			console.log("state", state);

			let filteredData = []

			if ( filterKeys.length > 0 ) {
				filterKeys.map( (filter, idx) => {
					let {
						data,
						filters,
					} = state

					// FIRST FILTER
					if ( idx < 1 ) {
						data.map( (item, i) => {
							console.log("item ----------->", item);
							console.log("item[filter] --->", item[filter]);

							// if ( item[filter].includes(filters[filter]) ) {
							if ( item[filter].includes(updatedFilters[filter]) ) {
								filteredData.push( item )
							}
							return item
						})

						// ALL OTHER FILTERS
					} else {
						filteredData.map( (item, i) => {
							// if ( !item[filter].includes( filters[filter] ) ) {
							if ( !item[filter].includes( updatedFilters[filter] ) ) {
								// filteredData
								filteredData.splice( i, 1 )
							}
							// return item;
						})
					}
				})
			}



			return {
				...state,
				filters: updatedFilters,
				filteredData: filteredData,
			}

		default:
			return state

	}
}

export default dataGrid;