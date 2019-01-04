import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import authReducer from "../reducers/auth";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	return createStore(
		combineReducers( {
			expenses: expensesReducer,
			filter  : filterReducer,
			auth: authReducer
		} ),
		composeEnhancers(applyMiddleware(thunk))
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	);
};

