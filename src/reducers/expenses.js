const expensesReducerDefaultState = [];

export default ( state = expensesReducerDefaultState, action ) => {
	switch ( action.type ){
		case "ADD EXPENSE":
			return [
				...state,
				action.expense,
			];
		case "REMOVE EXPENSE":
			return state.filter( ( expense ) => expense.id !== action.id );
		case "EDIT EXPENSE":
			return state.map( ( expense ) => {
				if ( expense.id === action.id ){
					return { ...expense, ...action.updates };
					
				} else{
					return expense;
				}
			} );
		case "SET EXPENSES":
			return action.expenses;
		default:
			return state;
	}
};

