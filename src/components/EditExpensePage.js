import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends Component {
	
	onEditExpense = (expense) => {
		this.props.editExpense( {
			id: this.props.expense.id,
			updates: expense} );
		this.props.history.push( "/" );
	};
	
	onRemoveExpense = () => {
		
		this.props.removeExpense({ id: this.props.expense.id });
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
	editExpense: (expense) => dispatch(editExpense(expense)),
	removeExpense: (idObject) => dispatch(removeExpense( idObject ))
});

export default connect( mapStateToProps, mapDispatchToProps )( EditExpensePage );