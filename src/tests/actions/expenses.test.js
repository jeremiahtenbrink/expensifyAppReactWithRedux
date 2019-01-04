import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
	startAddExpense,
	addExpense,
	editExpense,
	removeExpense,
	setExpenses,
	startSetExpenses,
	startRemoveExpense, startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configMockStore( [ thunk ] );

beforeEach( ( done ) => {
	const expensesData = {};
	expenses.forEach( ( { id, description, note, amount, createdAt } ) => {
		expensesData[ id ] = { description, note, amount, createdAt };
	} );
	database.ref( "expenses" ).set( expensesData ).then( () => {
		done();
	} );
} );

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
	const action = addExpense( expenses[ 2 ] );
	expect( action ).toEqual( {
		type   : "ADD EXPENSE",
		expense: expenses[ 2 ],
	} );
} );

test( "should add expense to database and store", ( done ) => {
	const store = createMockStore( {} );
	
	const expenseData = {
		description: "mouse",
		amount     : 30000,
		note       : "This one is better",
		createdAt  : 1000,
	};
	
	store.dispatch( startAddExpense( expenseData ) ).then( () => {
		const actions = store.getActions();
		expect( actions[ 0 ] ).toEqual( {
			type   : "ADD EXPENSE",
			expense: {
				id: expect.any( String ),
				...expenseData,
			},
		} );
		
		return database.ref( `expenses/${ actions[ 0 ].expense.id }` ).once( "value" );
		
	} ).then( ( snapshot ) => {
		expect( snapshot.val() ).toEqual( expenseData );
		done();
	} );
} );

test( "should add expense with defaults to database and store", ( done ) => {
	const store = createMockStore( {} );
	
	const defaultData = {
		description: "",
		note       : "",
		amount     : 0,
		createdAt  : 0,
	};
	
	store.dispatch( startAddExpense( {} ) ).then( () => {
		const actions = store.getActions();
		expect( actions[ 0 ] ).toEqual( {
			type   : "ADD EXPENSE",
			expense: {
				id: expect.any( String ),
				...defaultData,
			},
		} );
		
		return database.ref( `expenses/${ actions[ 0 ].expense.id }` ).once( "value" );
		
	} ).then( ( snapshot ) => {
		expect( snapshot.val() ).toEqual( defaultData );
		done();
	} );
} );

test( "should set up set expense action object with data", () => {
	const action = setExpenses( expenses );
	expect( action ).toEqual( {
		type: "SET EXPENSES",
		expenses,
	} );
} );

test( "should fetch the expenses from firebase", ( done ) => {
	const store = createMockStore( {} );
	store.dispatch( startSetExpenses() ).then( () => {
		const actions = store.getActions();
		expect( actions[ 0 ] ).toEqual( {
			type: "SET EXPENSES",
			expenses,
		} );
		done();
	} );
} );

test( "should remove expense from database and check removeExpense action", ( done ) => {
	const store = createMockStore( {} );
	
	store.dispatch( startRemoveExpense( {
		id: expenses[ 1 ].id,
	} ) ).then( ()   => {
		const actions = store.getActions();
		expect( actions[ 0 ] ).toEqual( {
			type: "REMOVE EXPENSE",
			id  : expenses[ 1 ].id,
		} );
	} );
	
	const record = database.ref( `expenses/${ expenses[ 1 ].id }` ).once( "value" ).then( ( snapshot ) => {
		console.log( snapshot.val() );
		expect( snapshot.val() ).toBeFalsy();
		done();
		
	} );
	
} );

test( "should edit expense from database and check if editExpense object is correct", (done) => {
	const store = createMockStore( {} );
	const id = expenses[1].id;
	const updates = {
		...expenses[1],
		note: "This is a updated note"
	};
	store.dispatch( startEditExpense({id, updates}) ).then(() => {
	    const actions = store.getActions();
	    expect(actions[0]).toEqual({
		    type: 'EDIT EXPENSE',
		    id: expenses[1].id,
		    updates
	    });
	});
	
	database.ref(`expenses/${id}`).once('value').then((snapshot) => {
		expect(snapshot.val()).toEqual({
			...expenses[1],
			note: "This is a updated note"
		});
		done();
	});
	
} );

// test( "Should setup add expense action object with default values", () => {
// 	const action = addExpense();
// 	expect( action ).toEqual( {
// 		type   : "ADD EXPENSE",
// 		expense: {
// 			id         : expect.any( String ),
// 			description: "",
// 			note       : "",
// 			amount     : 0,
// 			createdAt  : 0,
// 		},
// 	} );
// } );
