// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types'
import glamorous, { Div, Input } from 'glamorous'
// import DataCell from './DataCell'

const style = {
	root: {
		display: 'flex',
		flex: '1 0 auto',
		flexDirection: 'row',
	},
	input: {
		display: 'flex',
		flex: '1 0 auto',
		flexDirection: 'row',
	}
}


const RowFilters = ({ data, editFilter }) => {

	// let cells = []
	//
	// for (let item in rowDatum) {
	// 	// console.log(" item ---> ",rowDatum[item]);
	// 	let cell = <DataCell key={ item } cellDatum={ rowDatum[item] } />
	// 	cells.push( cell );
	// }
	// console.log("data ", data[0]);
	// console.log("data ", Object.keys(data[0]) );

	let keys = Object.keys(data[0]);
	let headers = []
	keys.map( ( item, i ) => {
		let content =
			<Input
				onChange={ editFilter }
				css={ style.input }
				name={ item }
				key={i}
				placeholder={keys[i]}
			/>
		headers.push( content );
	})


	return (
		<Div css={ style.root } >
			{ headers }
		</Div>
	)
}


RowFilters.propTypes = {
	rowDatum: PropTypes.object,
}


export default RowFilters;
