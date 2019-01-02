import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { altFilters, filters } from "../fixtures/filters";
import expenses from "../fixtures/expenses";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach( () => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow( <ExpenseListFilters
		filters={ filters }
		setTextFilter={ setTextFilter }
		sortByDate={ sortByDate }
		sortByAmount={ sortByAmount }
		setStartDate={ setStartDate }
		setEndDate={ setEndDate }
	/> );
} );

test( "should render ExpenseListFilters correctly", () => {
	expect( wrapper ).toMatchSnapshot();
} );

test( "should render ExpenseListFilters with altFilter", () => {
	
	wrapper.setProps( {
		filters: altFilters,
	} );
	expect( wrapper ).toMatchSnapshot();
	
} );

test( "should change text in expense list filter", () => {
	const value = "This is the new text";
	console.log( wrapper.find( "#expense-filter-text-input" ) );
	
	wrapper.find( "#expense-filter-text-input" ).prop( "onChange" )( {
		target: { value },
	} );
	expect( setTextFilter ).toHaveBeenLastCalledWith( value );
} );

test( "should change to sort by date expense list filter", () => {
	const value = "date";
	wrapper.setProps( {
		filter: altFilters,
	} );
	wrapper.find( "select" ).prop( "onChange" )( {
		target: { value },
	} );
	expect( sortByDate ).toHaveBeenCalled();
} );

test( "should change to sort by amount expense list filter", () => {
	const value = "amount";
	
	wrapper.find( "select" ).prop( "onChange" )( {
		target: { value },
	} );
	expect( sortByAmount ).toHaveBeenCalled();
} );

test( "should change start date in expense list filter", () => {
	const value = {
		startDate: moment( 0 ).add( 30, "days" ),
		endDate  : moment( 0 ).add( 400, "days" ),
	};
	
	wrapper.find( "DateRangePicker" ).prop( "onDatesChange" )( value );
	expect( setStartDate ).toHaveBeenCalledWith( value.startDate );
} );

test( "should change end date in expense list filter", () => {
	const value = {
		startDate: moment( 0 ).add( 30, "days" ),
		endDate  : moment( 0 ).add( 400, "days" ),
	};
	
	wrapper.find( "DateRangePicker" ).prop( "onDatesChange" )( value );
	expect( setEndDate ).toHaveBeenCalledWith( value.endDate );
} );

test( "should check state focused is called and changed to endDate in expense list filter", () => {
	const value = 'endDate';
	
	wrapper.find( "DateRangePicker" ).prop( "onFocusChange" )( value );
	expect(wrapper.state('calendarFocused')).toBe(value);
} );

