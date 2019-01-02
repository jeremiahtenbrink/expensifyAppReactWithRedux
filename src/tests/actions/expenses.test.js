import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import uuid from "uuid";

test( "Should setup remove expense action object", () => {
	const action = removeExpense( { id: "123ABC" } );
	expect( action ).toEqual( {
		type: "REMOVE EXPENSE",
		id  : "123ABC",
	} );
} );

test( "Should setup edit expense action object", () => {
	const action = editExpense( { id: "123ABC", updates: { notes: "These are new notes" } } );
	expect( action ).toEqual( {
		id     : "123ABC",
		type   : "EDIT EXPENSE",
		updates: {
			notes: "These are new notes",
		},
	} );
} );

test( "Should setup add expense action object with provided values", () => {
	const action = addExpense( {
		
		amount     : 109500,
		description: "Rent",
		createdAt  : 1000,
		note       : "This was last months rent",
	} );
	expect( action ).toEqual( {
		type   : "ADD EXPENSE",
		expense: {
			id         : expect.any( String ),
			description: "Rent",
			amount     : 109500,
			createdAt  : 1000,
			note       : "This was last months rent",
		},
		
	} );
} );

test( "Should setup add expense action object with default values", () => {
	const action = addExpense();
	expect( action ).toEqual( {
		type   : "ADD EXPENSE",
		expense: {
			id         : expect.any( String ),
			description: "",
			note       : "",
			amount     : 0,
			createdAt  : 0,
		},
	} );
} );
