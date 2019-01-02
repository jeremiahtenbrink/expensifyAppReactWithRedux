import { createStore, combineReducers} from "redux";
import uuid from 'uuid';

//ADD EXPENSE ACTION
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
    type: 'ADD EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

});

//EDIT EXPENSE ACTION
const editExpense = (
    {
        id,
        updates
    } = {}) => ({
    type: 'EDIT EXPENSE',
    id,
    updates
});

// REMOVE EXPENSE BY ID
const removeExpense = ({ id = undefined } = {}) => ({
    type: 'REMOVE EXPENSE',
    id
});

//SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'SET FILTER TEXT',
    text
});

//SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT BY AMOUNT'
});

//SORT BY DATE
const sortByDate = () => ({
    type: 'SORT BY DATE'
});


//SET START DATE
const setStartDate = (date = undefined) => ({
    type: "SET START DATE",
    date
});


//SET END DATE
const setEndDate = (date = undefined) => ({
    type: "SET END DATE",
    date
});

// EXPENSES REDUCER

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>  {
    switch (action.type) {
        case "ADD EXPENSE":
            return [
                ...state,
                action.expense,
            ];
        case "REMOVE EXPENSE":
            return state.filter((expense)=> expense.id !== action.id);
        case "EDIT EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id){
                    const newExpense = {...expense, ...action.updates};

                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// FILTER REDUCER

const filterReducerDefaultState = ({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
});

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET FILTER TEXT':
            return { ...state, text: action.text};
        case 'SORT BY AMOUNT':
            return { ...state, sortBy: 'amount'};
        case 'SORT BY DATE':
            return { ...state, sortBy: 'date'};
        case 'SET START DATE':
            return { ...state, startDate: action.date};
        case 'SET END DATE':
            return { ...state, endDate: action.date};
        default:
            return state;
    }
};
//TIMESTAMP (milliseconds)
//January 1st 1970 (unix epoch)

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
        })
);

store.subscribe(() => {
   const state = store.getState();
    console.log(state.filter)
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
   console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 400, createdAt: 21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));



// console.log(expenseOne);
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense({ id: expenseTwo.expense.id , updates: { amount: 400 }}));
//
// store.dispatch(setTextFilter(''));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
