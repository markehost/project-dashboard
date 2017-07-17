// ------------------------------------
// MOCK DATA
// ------------------------------------
import { DATA } from '../mockData'
import { isNumber } from '../util'
import Moment from 'moment'
// INITIAL STATE
let mockData = DATA;


const dataGrid = ( state = { data: mockData, filteredData: [], filters: {} }, action ) => {

	let filteredData = []
	let filterKeys
	let copy
	let updatedFilters = {}
	let {
		data,
		// filters,
		// filteredData,
	} = state

	switch ( action.type ) {

		// ------------------------------------
		// EDIT DATA SET
		// ------------------------------------
		case 'EDIT_DATA':
			// console.log(" edit filter - state", state);
			return state


		// ------------------------------------
		// EDIT DATE FILTER
		// ------------------------------------
		case 'EDIT_DATE_FILTER':

			if ( Moment.isMoment(action.payload.startDate) && Moment.isMoment(action.payload.endDate)) {

				// update filters with date range
				let field = action.payload.name
				let values = {
					startDate: action.payload.startDate,
					endDate: action.payload.endDate,
				}
				updatedFilters = Object.assign( {}, state.filters, {
					[field]: values
				})

			} else {
				copy = Object.assign( {}, state.filters)
				delete copy['created']
				delete copy['modified']

				updatedFilters = copy
			}

			// TODO: FILTER DATA
			filterKeys = Object.keys( updatedFilters )

			if ( filterKeys.length > 0 ) {
				filterKeys.map( (filter, idx) => {

					// FIRST FILTER - ADD ITEMS TO FILTERED ARRAY
					if ( idx < 1 ) {
						data.map( (item, i) => {

							let normalizedItem = !isNumber( item[filter] ) ? item[filter] : item[filter].toString(10)

							// check if DATE fields
							if ( filter === 'created' || filter === 'modified' ) {
								let start = updatedFilters[filter].startDate
								let end = updatedFilters[filter].endDate
								let current = Moment( normalizedItem  )

								if ( Moment(current).isBetween( start, end ) ) {
									filteredData.push( item )
								}

								// NON DATE FILTERS
							} else {

								if ( normalizedItem.includes(updatedFilters[filter]) ) {
									filteredData.push( item )
								}
							}

							return item
						})

						// ALL OTHER FILTERS - REMOVE ITEM FROM FILTERED ARRAY
					} else {

						filteredData.map( (item, i) => {
							let normalizedItem = !isNumber( item[filter] ) ? item[filter] : item[filter].toString(10)

							// check if DATE fields
							if ( filter === 'created' || filter === 'modified' ) {
								debugger
								let start = updatedFilters[filter].startDate
								let end = updatedFilters[filter].endDate
								let current = Moment( normalizedItem  )
								let isBetween = !Moment(current).isBetween( start, end )

								if ( isBetween ) {
									debugger
									filteredData.splice( i, 1)
								}

								// NON DATE FILTERS
							} else {
								if ( !normalizedItem.includes( updatedFilters[filter] ) ) {
									filteredData.splice( i, 1 )
								}
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


		// ------------------------------------
		// EDIT FILTER
		// ------------------------------------
		case 'EDIT_FILTER':

			// UPDATE FILTERS
			let field = action.payload.name
			let value = action.payload.value

			// ADD FILTER TO FILTER OBJECT
			if ( value !== '' ) {
				updatedFilters = Object.assign( {}, state.filters, {
					[field]: value
				})

				// REMOVE FILTER IF EMPTY
			} else {
				// let copy = Object.assign( {}, state.filters )
				copy = Object.assign( {}, state.filters )
				delete copy[field]
				updatedFilters = copy
			}

			// FILTER THE DATA
			filterKeys = Object.keys( updatedFilters )

			// let filteredData = []
			filteredData = []

			if ( filterKeys.length > 0 ) {
				filterKeys.map( (filter, idx) => {

					// FIRST FILTER - ADD ITEMS TO FILTERED ARRAY
					if ( idx < 1 ) {
						data.map( (item, i) => {
							let normalizedItem = !isNumber( item[filter] ) ? item[filter] : item[filter].toString(10)

							if ( normalizedItem.includes(updatedFilters[filter]) ) {
								filteredData.push( item )
							}
							return item
						})

						// ALL OTHER FILTERS - REMOVE ITEM FROM FILTERED ARRAY
					} else {
						filteredData.map( (item, i) => {
							let normalizedItem = !isNumber( item[filter] ) ? item[filter] : item[filter].toString(10)

							if ( !normalizedItem.includes( updatedFilters[filter] ) ) {
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


		// ------------------------------------
		// DEFAULT
		// ------------------------------------
		default:
			return state

	}
}

export default dataGrid;