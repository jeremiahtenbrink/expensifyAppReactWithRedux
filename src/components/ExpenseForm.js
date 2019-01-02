import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { connect } from "react-redux";

export class ExpenseForm extends React.Component {
	constructor ( props )
	{
		super( props );
		
		this.state = {
			description    : props.expense ? props.expense.description : "",
			note           : props.expense ? props.expense.note : "",
			amount         : props.expense ? ( props.expense.amount / 100 ).toString() : "",
			createdAt      : props.expense ? moment( props.expense.createdAt ) : moment(),
			calendarFocused: false,
			errorMessage   : "",
		};
	}
	
	onDescriptionChange = ( e ) => {
		const description = e.target.value;
		this.setState( () => ( { description } ) );
	};
	
	onTextAreaChange = ( e ) => {
		const note = e.target.value;
		this.setState( () => ( { note } ) );
	};
	
	onAmountChange = ( e ) => {
		const amount = e.target.value;
		if ( !amount || amount.match( /^\d{1,}(\.\d{0,2})?$/ ) ){
			this.setState( () => ( { amount } ) );
		}
	};
	
	onDateChange = ( createdAt ) => {
		if ( createdAt ){
			this.setState( () => ( { createdAt } ) );
		}
	};
	
	onFocuseChange = ( { focused } ) => {
		this.setState( () => ( { calendarFocused: focused } ) );
	};
	
	onSubmit = ( e ) => {
		e.preventDefault();
		
		if ( !this.state.description || !this.state.amount ){
			// set error state
			this.setState( () => ( { errorMessage: "Please provide description and amount." } ) );
		} else{
			this.setState( () => ( { errorMessage: "" } ) );
			// send to edit or add expense page
			this.props.onSubmit( {
				description: this.state.description,
				amount     : parseFloat( this.state.amount ) * 100,
				createdAt  : this.state.createdAt.valueOf(),
				note       : this.state.note,
			} );
		}
	};
	
	render ()
	{
		return (
			<div>
				{ this.state.errorMessage && <p>{ this.state.errorMessage }</p> }
				<form onSubmit={ this.onSubmit }>
					<input type="text"
					       placeholder="Description"
					       autoFocus
					       value={ this.state.description }
					       onChange={ this.onDescriptionChange }
					/>
					<input type="text"
					       placeholder="Amount"
					       value={ this.state.amount }
					       onChange={ this.onAmountChange }
					/>
					<SingleDatePicker
						date={ this.state.createdAt }
						onDateChange={ this.onDateChange }
						focused={ this.state.calendarFocused }
						onFocusChange={ this.onFocuseChange }
						numberOfMonths={ 1 }
						isOutsideRange={ () => false }
					/>
					<textarea name="note" id="" cols="20" rows="2"
					          value={ this.state.note }
					          placeholder="Add a note for your expense"
					          onChange={ this.onTextAreaChange }/>
					<button>Add Expense</button>
				
				</form>
			</div>
		);
	}
}

export default connect()( ExpenseForm );
