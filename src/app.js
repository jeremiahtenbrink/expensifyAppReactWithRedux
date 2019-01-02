import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses"

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider} from 'react-redux';

import "react-dates/lib/css/_datepicker.css";

const store = configureStore();


store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 21000}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 400, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 4, createdAt: 109500}));


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
