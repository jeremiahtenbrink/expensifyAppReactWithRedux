import { setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";
import moment from "moment";

test( "should generate set start date action object", () => {
	const result = setStartDate( moment( 0 ) );
	expect( result ).toEqual( {
		type: "SET START DATE",
		date: moment( 0 ),
	} );
} );

test( "should generate set end date action object", () => {
	const result = setEndDate( moment( 0 ) );
	expect( result ).toEqual( {
		type: "SET END DATE",
		date: moment( 0 ),
	} );
} );

test( "should generate sort by amount action object", () => {
	const result = sortByAmount( moment( 0 ) );
	expect( result ).toEqual( {
		type: "SORT BY AMOUNT",
	} );
} );

test( "should generate sort by date action object", () => {
	const result = sortByDate( moment( 0 ) );
	expect( result ).toEqual( {
		type: "SORT BY DATE",
	} );
} );

test( "should generate set text filter action object with variables passed in", () => {
	const result = setTextFilter( "sort by this text" );
	expect( result ).toEqual( {
		type: "SET FILTER TEXT",
		text: "sort by this text",
	} );
} );

test( "should generate set text filter action object with default value used", () => {
	const result = setTextFilter();
	expect( result ).toEqual( {
		type: "SET FILTER TEXT",
		text: "",
	} );
} );