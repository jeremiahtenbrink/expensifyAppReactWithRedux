import React from "react";
import ExspenseListItem from "../../components/ExspenseListItem";
import { shallow } from "enzyme/build";
import expenses from "../fixtures/expenses";

test('should render expense list item with given item', () => {
	const wrapper = shallow( <ExspenseListItem key={ expenses[1].id } { ...expenses[1] } /> );
	expect(wrapper).toMatchSnapshot();
});