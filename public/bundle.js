"use strict";

var _react = require( "react" );

var _react2 = _interopRequireDefault( _react );

var _reactDom = require( "react-dom" );

var _reactDom2 = _interopRequireDefault( _reactDom );

var _AppRouter = require( "./routers/AppRouter" );

var _AppRouter2 = _interopRequireDefault( _AppRouter );

var _configureStore = require( "./store/configureStore" );

var _configureStore2 = _interopRequireDefault( _configureStore );

var _expenses = require( "./actions/expenses" );

var _filters = require( "./actions/filters" );

var _expenses2 = require( "./selectors/expenses" );

var _expenses3 = _interopRequireDefault( _expenses2 );

require( "normalize.css/normalize.css" );

require( "./styles/styles.scss" );

function _interopRequireDefault ( obj )
{
	return obj && obj.__esModule ? obj : { default: obj };
}

var store = ( 0, _configureStore2.default )();

store.subscribe( function () {
	var state = store.getState();
	console.log( "inside subscibe." );
	console.log( state.filter );
	var visibleExpenses = ( 0, _expenses3.default )( state.expenses, state.filter );
	console.log( visibleExpenses );
} );

store.dispatch( ( 0, _expenses.addExpense )( { description: "Water Bill", amount: 400, createdAt: 21000 } ) );
store.dispatch( ( 0, _expenses.addExpense )( { description: "Gas Bill", amount: 400, createdAt: 21000 } ) );

store.dispatch( ( 0, _filters.setTextFilter )( "water" ) );

_reactDom2.default.render( _react2.default.createElement( _AppRouter2.default, null ),
	document.getElementById( "app" ) );
