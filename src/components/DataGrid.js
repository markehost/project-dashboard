import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import glamorous, {ThemeProvider} from 'glamorous'
import { Div } from 'glamorous'
import DataTable from './DataTable'
import RowFilters from './RowFilters'

const style = {
	display: 'flex',
	// flex: '1 0 auto',
	flex: '1 0 auto',
	flexDirection: 'column',
}


class DataGrid extends Component {
	constructor(props){
		super(props);
		// console.log(" props -->", props);

	}

	render() {
		// console.info("this.props -----> ", this.props );

		let {
			editFilter,
			editDateFilter,
			filters,
			filteredData,
			data,
		} = this.props

		let tableData = Object.keys(filters).length > 0 ? filteredData : data

		return (
			<Div css={ style }>

				<RowFilters editFilter={ editFilter } editDateFilter={ editDateFilter } data={ data } />
				<DataTable filters={ filters } data={ tableData } />

			</Div>
		);
	}
}

DataGrid.propTypes = {
	editFilter: PropTypes.func,
	filters: PropTypes.object,
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


export default DataGrid;
