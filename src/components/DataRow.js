// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types'
import { Div } from 'glamorous'
import DataCell from './DataCell'

const style = {
	display: 'flex',
	flex: '1 0 auto',
	flexDirection: 'row',
}


const DataRow = ({ rowDatum }) => {
	// console.log("cell", cells);
	// console.log("rowDatum", rowDatum);

	let numberOfRows = Object.keys(rowDatum).length
	let width = `${100 / numberOfRows}%`;

	let cells = []
	for (let item in rowDatum) {
		// console.log(" item ---> ",rowDatum[item]);
		let cell = <DataCell width={ width } key={ item } cellDatum={ rowDatum[item] } />
		cells.push( cell );
	}


	return (
		<Div css={ style } >
			{ cells }
		</Div>
	)
}


DataRow.propTypes = {
	rowDatum: PropTypes.object,
}


export default DataRow;
