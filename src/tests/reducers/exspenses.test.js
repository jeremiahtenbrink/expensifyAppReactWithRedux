import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test( "should set default state", () => {
	const result = expenseReducer( undefined, { type: "@@INIT" } );
	expect( result ).toEqual( [] );
} );

test( "should remove expenses by id", () => {
	const action = {
		type: "REMOVE EXPENSE",
		id  : expenses[ 1 ].id,
	};
	const state = expenseReducer( expenses, action );
	expect( state ).toEqual( [
		expenses[ 0 ],
		expenses[ 2 ],
	] );
} );

test( "should not remove expenses if id is not found", () => {
	const action = {
		type: "REMOVE EXPENSE",
		id  : -1,
	};
	const state = expenseReducer( expenses, action );
	expect( state ).toEqual( expenses );
} );

test( "should add a expense to the expenses array", () => {
	const newExpense = {
		id         : "3",
		description: "Pop",
		note       : "some note here",
		amount     : 315,
		createdAt  : moment( 0 ),
	};
	const action = {
		type   : "ADD EXPENSE",
		expense: newExpense,
	};
	
	const state = expenseReducer( expenses, action );
	expect( state ).toEqual( [
		...expenses,
		newExpense,
	] );
} );

test( "should edit a expense in the expenses array", () => {
	const editedExpense = {
		id         : "2",
		description: "Cable",
		note       : "new note",
		amount     : 12,
		createdAt  : moment( 0 ),
	};
	
	const action = {
		type   : "EDIT EXPENSE",
		id     : "2",
		updates: editedExpense,
		
	};
	
	const state = expenseReducer( expenses, action );
	expect( state ).toEqual( [
		expenses[ 0 ],
		editedExpense,
		expenses[ 2 ],
	] );
} );

test( "should not edit the array if the item isn't found", () => {
	const editedExpense = {
		id         : "7",
		description: "Cable",
		note       : "new note",
		amount     : 12,
		createdAt  : moment( 0 ),
	};
	
	const action = {
		type   : "EDIT EXPENSE",
		id     : "7",
		updates: editedExpense,
		
	};
	
	const state = expenseReducer( expenses, action );
	expect( state ).toEqual( expenses );
} );

test('should set expenses', () => {
	const action = {
		type: 'SET EXPENSES',
		expenses: [expenses[1]]
	};
	
	const state = expenseReducer( expenses, action);
	expect(state).toEqual([expenses[1]]);
});

