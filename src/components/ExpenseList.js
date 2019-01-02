import React from "react";
import { connect } from "react-redux";
import ExspenseListItem from "./ExspenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = ( props ) => (
	<div>
		{
			props.expenses.length === 0 ? (
				<p>No expenses</p>
			) : (
				props.expenses.map( ( expense ) => {
					return <ExspenseListItem key={ expense.id } { ...expense } />;
				} )
			)
		}
	
	</div>
);

const mapStateToProps = state => ( {
	expenses: selectExpenses( state.expenses, state.filter ),
} );

export default connect( mapStateToProps )( ExpenseList );

ExpenseList.propTypes = {};
ExpenseList.defaultProps = {};


