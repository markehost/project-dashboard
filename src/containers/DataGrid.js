import { connect } from 'react-redux'
import { editFilter } from '../actions'
import { default as DataGridComponent } from '../components/DataGrid'


const mapStateToProps = state => {
	// console.log("state", state);
	return {
		// todos: getVisibleTodos(state.todos, state.visibilityFilter),
		data: state.dataGrid.data,
		filteredData: state.dataGrid.filteredData,
		filters: state.dataGrid.filters,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// onTodoClick: id => {
		// 	dispatch(toggleTodo(id))
		// },

		editFilter: ( item ) => {
			// console.log("editFilter - item", item);
			console.log("editFilter - item", item.target.value);
			console.log("editFilter - item", item.target.name);

			let payload = {
				name: item.target.name,
				value: item.target.value,
			}

			dispatch( editFilter(payload) );
		},

	}
}

const DataGrid = connect(
	mapStateToProps,
	mapDispatchToProps
)(DataGridComponent)

export default DataGrid