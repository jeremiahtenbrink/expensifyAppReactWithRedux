import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let startAddExpense, history, wrapper;

beforeEach( () => {
	startAddExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow( <AddExpensePage startAddExpense={ startAddExpense } history={ history }/> );
} );

test( "should handle onAddExpense", () => {
	wrapper.find( '#expense-form' ).prop( "onSubmit" )( expenses[ 1 ] );
	expect( history.push ).toHaveBeenLastCalledWith( "/" );
	expect( startAddExpense ).toHaveBeenLastCalledWith( expenses[ 1 ] );
} );

test( "should render add expense page correctly", () => {
	expect( wrapper ).toMatchSnapshot();
} );
