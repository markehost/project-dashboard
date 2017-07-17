import React, { Component } from 'react';
// import React from 'react';
import Moment from 'moment'
import PropTypes from 'prop-types'
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

class RowFilterCell extends Component {
	constructor(props) {
		super(props)
		// console.log("props", props);

		this.state = {
			// startDate: null,
			startDate: Moment('2015-07-01'),
			endDate: null,
			focusedInput: null,
			name: props.data,
		}
	}

	render() {
		let {
			editFilter,
			editDateFilter,
			data,
		} = this.props

		let {
			startDate,
			endDate,
			focusedInput,
		} = this.state

		// console.log("this.props", this.props);
		let keys = Object.keys(data[0]);
		let headers = []

		// console.log("key ---->", keys );


		// keys.map( ( item, i ) => {
			let content

			if ( data === 'created' || data === 'modified' ) {
				// console.log("datepicker --->");
				// console.log("keys[i]", keys[i]);

				content =
					<DateRangePicker
						key={ data }
						showClearDates={ true }
						isOutsideRange={() => false}
						startDate={ startDate } // momentPropTypes.momentObj or null,
						endDate={ endDate } // momentPropTypes.momentObj or null,
						onDatesChange={
							({ startDate, endDate }) => {
								this.setState({ startDate, endDate }, () => {
									editDateFilter( this.state )
								})
							}
						} // PropTypes.func.isRequired,
						focusedInput={ focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
						onFocusChange={ focusedInput => this.setState({ focusedInput }) } // PropTypes.func.isRequired,
					/>
			} else {
				content =
					<Input
						onChange={ editFilter }
						css={ style.input }
						name={ data }
						key={ data }
						placeholder={ data }
					/>
			}

			// headers.push( content );
		// })


		return (
			<Div css={ style.root } >
				{ content }
			</Div>
		)
	}
}

RowFilterCell.propTypes = {
	// rowDatum: PropTypes.object,
	data: PropTypes.string,
	editFilter: PropTypes.func,
	editDateFilter: PropTypes.func,
}

export default RowFilterCell;
