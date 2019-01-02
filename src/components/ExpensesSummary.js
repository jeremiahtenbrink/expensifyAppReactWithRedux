import React from "react";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import { getExpensesTotal } from "../selectors/expenses-total";
import { connect} from "react-redux";

export const ExpensesSummary = ( { expenseCount, expensesTotal, totalNumberOfExpenses } ) => {
	
	const expenseWord = expenseCount === 1 ? "expense" : "expenses";
	const formattedExpensesTotal = numeral( expensesTotal / 100 ).format( "$0,0.00" );
	
	return (
		<div>
			<h3>
				Showing { expenseCount } of { totalNumberOfExpenses } { expenseWord }:
				
			</h3>
			<h3>
				Totalling: { formattedExpensesTotal }
			</h3>
		</div>
	);
};

const mapStateToProps = ( state ) => {
	const visibleExpenses = selectExpenses( state.expenses, state.filter );
	
	return {
		expenseCount        : visibleExpenses.length === 0 ? 0 : visibleExpenses.length,
		expensesTotal        : getExpensesTotal( visibleExpenses ),
		totalNumberOfExpenses: state.expenses.length,
	};
};

export default connect( mapStateToProps )( ExpensesSummary );


