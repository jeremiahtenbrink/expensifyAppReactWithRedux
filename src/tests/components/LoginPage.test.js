
import { shallow } from "enzyme";
import React from "react";
import { LoginPage } from "../../components/LoginPage";

test('should test the rendering of the login page', () => {
	const wrapper = shallow( <LoginPage /> );
	expect( wrapper ).toMatchSnapshot();
	
});

test( "should call start login" +
      " on button click", () => {
	
	const startLogin = jest.fn();
	
	const wrapper = shallow( <LoginPage startLogin={ startLogin }/> );
	
	wrapper.find( "button" ).prop( "onClick" )();
	expect( startLogin ).toHaveBeenCalled();
} );