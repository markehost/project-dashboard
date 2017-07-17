import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Div } from 'glamorous'
import DataRow from './DataRow'

const style = {
	display: 'flex',
	flex: '1 0 auto',
	flexDirection: 'column',
	margin: '1rem 2rem',
}

class DataTable extends Component {
	constructor(props){
		super(props);
		// console.log(" props -->", props);

	}

	renderTableRows = ( items, filters ) => {
		let filterKeys = Object.keys(filters);
		// console.log("items", items);
		// console.log("filters", filters);
		// console.log("filterKeys", filterKeys);

		let rows = []

		// THERE ARE CURRENTLY FILTERS IN PLACE
		// if ( filterKeys.length > 0 ) {
		// 	let filteredDataSet = []
		// 	let filteredDataRowsToRender = []
		//
		// 	// LOOP OVER THE KEYS FOR ALL FILTERS
		// 	filterKeys.map( (filter, idx) => {
		// 		// console.log("index --->", idx);
		// 		// console.log("filter  --->", filter);
		// 		// console.log("filters[filter]  --->", filters[filter]);
		// 		// console.log("item[filter]  --->", item[filter] );
		// 		// console.log("item[filter].includes( filters[filter] )  --->", item[filter].includes( filters[filter] ) );
		//
		// 		// PASSED THE FIRST FILTER - FILTER THINGS DIFFERENTLY
		// 		if ( idx >= 1 ) {
		// 			filteredDataSet.map( (item, i) => {
		// 				// console.log("-----------------------------------");
		// 				// console.log("item --->", item);
		// 				// console.log("index --->", i);
		// 				// console.log("item[filter] --->", item[filter]);
		//
		// 				// REMOVE ITEMS ARE THAT DO NOT MATCH FILTER
		// 				if ( !item[filter].includes( filters[filter] ) ) {
		// 					// let row = <DataRow key={ `${item[filter]}-${i}` } rowDatum={ item } />
		// 					filteredDataRowsToRender.splice( i, 1 )
		// 					filteredDataSet.splice( i, 1 )
		// 				}
		// 			})
		//
		// 		} else {
		// 			// PUSH
		// 			items.map( (item, i) => {
		// 				if ( item[filter].includes( filters[filter] ) ) {
		// 					let row = <DataRow key={ `${item}-${i}` } rowDatum={ item } />
		// 					filteredDataRowsToRender.push( row )
		// 					filteredDataSet.push( item )
		// 				}
		// 			})
		// 		}
		//
		// 	})
		// 	// console.log("filteredDataRowsToRender", filteredDataRowsToRender);
		// 	console.log("filteredDataSet", filteredDataSet);
		//
		// 	rows = filteredDataRowsToRender
		//
		// } else {
		//
		// 	items.map( (item, i) => {
		// 		let row = <DataRow key={ i } rowDatum={ item } />
		// 		rows.push( row );
		// 	});
		// }

		items.map( (item, i) => {
			let row = <DataRow key={ i } rowDatum={ item } />
			rows.push( row );
		});


		return rows
		
	}

	render() {
		console.log("this.props", this.props );

		let {
			data,
			filters,
		} = this.props

		let rows = this.renderTableRows( data, filters );
		// console.log("rows", rows);

		return (
			<Div css={ style }>
				{ rows }
			</Div>
		);
	}
}

DataTable.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			division: PropTypes.string,
			project_owner: PropTypes.string,
			budget: PropTypes.number,
			status: PropTypes.string,
			created: PropTypes.string,
			modified: PropTypes.string,
		})
	),
}


export default DataTable;
