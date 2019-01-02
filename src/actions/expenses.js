import uuid from "uuid";

//ADD EXPENSE ACTION
export const addExpense = (
	{
		description = "",
		note = "",
		amount = 0,
		createdAt = 0,
	} = {} ) => ( {
	type   : "ADD EXPENSE",
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt,
	},
	
} );

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
