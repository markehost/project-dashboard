// import React, { Component } from 'react';
import React from 'react';
import Numeral from 'numeral';
import PropTypes from 'prop-types'
import { Div } from 'glamorous'

const style = {
	// display: 'flex',
	// flex: '1 0 auto',
	// flexDirection: 'row',
	// width: `${100 / 7 }%`
}

const DataCell = ({ cellDatum, handleEditCell, width }) => {
	// console.log("cellDatum", cellDatum);

	// CONVERT NUMBER TO DOLLARS
	let isNumber = ( num ) => {
		return !isNaN( parseFloat(num) ) && isFinite(num)
	}
	let content = !isNumber(cellDatum) ? cellDatum : Numeral(cellDatum).format('$0,0.00')

	style.width = width;

	return (
		<Div css={ style }>
			{ content }
		</Div>
	)
}


DataCell.propTypes = {
	handleEditCell: PropTypes.func,
	cellDatum: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
}


export default DataCell;
