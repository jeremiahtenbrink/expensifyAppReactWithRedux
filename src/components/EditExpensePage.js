import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends Component {
	
	onEditExpense = (expense) => {
		this.props.startEditExpense( {
			id: this.props.expense.id,
			updates: expense} );
		this.props.history.push( "/" );
	};
	
	onRemoveExpense = () => {
		
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push( "/" );
	};
	
	render ()
	{
		
		return (
			<div>
				<ExpenseForm id="expense-form"
					expense={ this.props.expense }
					onSubmit={this.onEditExpense}
				/>
				
				<button onClick={this.onRemoveExpense}>Remove
				</button>
			</div>
		
		);
	}
}

const mapStateToProps = ( state, props ) => {
	return {
		expense: state.expenses.find( ( expense ) => expense.id === props.match.params.id ),
	};
};

const mapDispatchToProps = (dispatch) => ({
	startEditExpense: (expense) => dispatch(startEditExpense(expense)),
	startRemoveExpense: (idObject) => dispatch(startRemoveExpense( idObject ))
});

export default connect( mapStateToProps, mapDispatchToProps )( EditExpensePage );