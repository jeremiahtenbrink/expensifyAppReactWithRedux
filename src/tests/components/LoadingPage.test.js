import {shallow} from "enzyme/build";
import LoadingPage from "../../components/LoadingPage";
import React from "react";

test('should render Header correctly', () => {
    const wrapper = shallow(<LoadingPage startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});