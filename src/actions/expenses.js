import uuid from "uuid";
import database from '../firebase/firebase';
//ADD EXPENSE ACTION
export const addExpense = (expense) => ({
	type: 'ADD EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const {
			description = "",
			note = "",
			amount = 0,
			createdAt = 0,
		} = expenseData;
		const expense = { description, note, amount, createdAt };
		
		return database.ref('expenses').push(expense).then((ref) => {
			dispatch(addExpense({
			    id: ref.key,
			    ...expense
		    }));
		});
	}
};

//EDIT EXPENSE ACTION
export const editExpense = (
	{
		id,
		updates,
	} = {} ) => ( {
	type: "EDIT EXPENSE",
	id,
	updates,
} );

// REMOVE EXPENSE BY ID
export const removeExpense = ( { id = undefined } = {} ) => ( {
	type: "REMOVE EXPENSE",
	id,
} );
