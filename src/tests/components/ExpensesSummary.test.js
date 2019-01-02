import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { shallow } from "enzyme/build";
import expenses from "../fixtures/expenses";
import {filters} from "../fixtures/filters";

test( "should render expense summary with 1 item", () => {
	const wrapper = shallow( <ExpensesSummary expenseCount={1} expensesTotal={400} totalNumberOfExpenses={1}  /> );
	expect( wrapper ).toMatchSnapshot();
} );

test( "should render expense summary with multiple expense items", () => {
	const wrapper = shallow( <ExpensesSummary expenseCount={3} expensesTotal={40060} totalNumberOfExpenses={5}/> );
	expect( wrapper ).toMatchSnapshot();
} );