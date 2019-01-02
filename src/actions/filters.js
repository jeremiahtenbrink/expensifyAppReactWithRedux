//SET TEXT FILTER
export const setTextFilter = (text = '') => ({
	type: "SET FILTER TEXT",
	text,
});

//SORT BY AMOUNT
export const sortByAmount = () => ({
    type: 'SORT BY AMOUNT'
});

//SORT BY DATE
export const sortByDate = () => ({
    type: 'SORT BY DATE'
});


//SET START DATE
export const setStartDate = (date = undefined) => ({
    type: "SET START DATE",
    date
});


//SET END DATE
export const setEndDate = (date = undefined) => ({
    type: "SET END DATE",
    date
});
