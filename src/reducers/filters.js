// FILTER REDUCER

import moment from "moment";

const filterReducerDefaultState = ( {
	text     : "",
	sortBy   : "date",
	startDate: moment().startOf( "month" ),
	endDate  : moment().endOf( "month" ),
} );

export default ( state = filterReducerDefaultState, action ) => {
	switch ( action.type ){
		case "SET FILTER TEXT":
			return { ...state, text: action.text };
		case "SORT BY AMOUNT":
			return { ...state, sortBy: "amount" };
		case "SORT BY DATE":
			return { ...state, sortBy: "date" };
		case "SET START DATE":
			return { ...state, startDate: action.date };
		case "SET END DATE":
			return { ...state, endDate: action.date };
		default:
			return state;
	}
};