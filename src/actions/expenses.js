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

export const startEditExpense = ({ id, updates} = {}) => {
	return( dispatch) => {
		return database.ref( `expenses/${ id }` ).update( updates ).then( () => {
			dispatch(editExpense({id,updates}));
		} ).catch((e) => {
		    console.log(e);
		});
		
	}
};

// REMOVE EXPENSE BY ID
export const removeExpense = ( { id = undefined } = {} ) => ( {
	type: "REMOVE EXPENSE",
	id,
} );

export const startRemoveExpense = (idObject) => {
	return (dispatch) => {
		return database.ref(`expenses/${idObject.id}`).remove().then(() => {
			
			dispatch( removeExpense(idObject));
			
		}).catch(function(error) {
			console.log("Remove failed: " + error.message)
		});
	};
};

//SET EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET EXPENSES',
	expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
    	return database.ref('expenses').once('value').then((snapshot) => {
    	    const expenses = [];
    	    snapshot.forEach((childSnapshot) => {
    	        expenses.push({
		            id: childSnapshot.key,
		            ...childSnapshot.val()
	            });
    	    });
    	    dispatch(setExpenses(expenses));
    	});
    };
};



