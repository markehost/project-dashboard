import React, { Component } from 'react';
// import React from 'react';
import PropTypes from 'prop-types'
import RowFilterCell from './RowFilterCell'
import { Div, Input } from 'glamorous'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

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

class RowFilters extends Component {
	constructor(props) {
		super(props)

		this.state = {
			created: {
				startDate: null,
				endDate: null,
			},
			modified: {
				startDate: null,
				endDate: null,
			}
		}
	}

	render() {
		let {
			editFilter,
			editDateFilter,
			data,
		} = this.props

		let keys = Object.keys(data[0]);
		let headers = []

		// console.log("key ---->", keys );


		keys.map( ( item, i ) => {
			let content =
				<RowFilterCell
					key={ item }
					data={ keys[i] }
					name={ item }
					editFilter={ editFilter }
					editDateFilter={ editDateFilter }
				/>

			headers.push( content );
		})


		return (
			<Div css={ style.root } >
				{ headers }
			</Div>
		)
	}
}

RowFilters.propTypes = {
	// rowDatum: PropTypes.object,
	data: PropTypes.array,
	editFilter: PropTypes.func,
	editDateFilter: PropTypes.func,
}

export default RowFilters;
