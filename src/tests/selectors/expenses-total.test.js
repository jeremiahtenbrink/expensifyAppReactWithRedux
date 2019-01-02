import { getExpensesTotal } from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test( "should total for the expenses passed in", () => {
	
	const result = getExpensesTotal( expenses );
	expect( result ).toBe( 114195 );
} );

test( "should add up no expense", () => {
	
	const result = getExpensesTotal( [] );
	expect( result ).toBe( 0 );
} );

test( "should add up only one expense", () => {
	
	const result = getExpensesTotal( [expenses[1]] );
	expect( result ).toBe( 109500 );
} );