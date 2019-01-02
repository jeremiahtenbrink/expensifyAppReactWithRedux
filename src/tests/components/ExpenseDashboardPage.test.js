import React from 'react';
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";
import { shallow } from "enzyme/build";

test('should render expense dashboard page', () => {
	const wrapper = shallow(<ExpenseDashboardPage/>);
	expect(wrapper).toMatchSnapshot();
});