import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;

beforeEach( () => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper =
		shallow( <EditExpensePage expense={ expenses[ 1 ] } editExpense={ editExpense } removeExpense={ removeExpense }
		                          history={ history }/> );
} );

test( "should render edit expense page correctly", () => {
	expect( wrapper ).toMatchSnapshot();
} );


test( "should handle onEditExpense", () => {
	wrapper.find( '#expense-form' ).prop( "onSubmit" )( expenses[ 1 ] );
	expect( history.push ).toHaveBeenLastCalledWith( "/" );
	expect( editExpense ).toHaveBeenLastCalledWith( {
		id: "2",
		updates: expenses[ 1 ]
	});
} );

test( "should handle onRemoveExpense", () => {
	wrapper.find( 'button' ).prop( "onClick" )();
	expect( history.push ).toHaveBeenLastCalledWith( "/" );
	expect( removeExpense ).toHaveBeenLastCalledWith( {
		id: "2",
	});
} );

