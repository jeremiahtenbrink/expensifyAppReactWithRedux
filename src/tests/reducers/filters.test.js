import filterReducer from "../../reducers/filters";
import moment from "moment";

test( "should setup default filter values", () => {
	const state = filterReducer( undefined, { type: "@@INIT" } );
	expect( state ).toEqual( {
		text     : "",
		sortBy   : "date",
		startDate: moment().startOf( "month" ),
		endDate  : moment().endOf( "month" ),
	} );
} );

test( "should set sort by to amount", () => {
	const state = filterReducer( undefined, { type: "SORT BY AMOUNT" } );
	expect( state.sortBy ).toBe( "amount" );
} );

test( "should set sort by to date", () => {
	const currentState = {
		text     : "",
		startDate: undefined,
		endDate  : undefined,
		sortBy   : "amount",
	};
	const action = {
		type: "SORT BY DATE",
	};
	const state = filterReducer( currentState, action );
	expect( state.sortBy ).toBe( "date" );
} );

test( "should set text in filter current state", () => {
	const state = filterReducer( undefined, { type: "SET FILTER TEXT", text: "Test Text" } );
	expect( state.text ).toBe( "Test Text" );
} );

test( "should set startDate in filter current state", () => {
	const state = filterReducer( undefined, { type: "SET START DATE", date: moment( 15670 ) } );
	expect( state.startDate ).toEqual( moment( 15670 ) );
} );

test( "should set endDate in filter current state", () => {
	const state = filterReducer( undefined, { type: "SET END DATE", date: moment( 15670 ) } );
	expect( state.endDate ).toEqual( moment( 15670 ) );
} );