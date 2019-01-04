import { logout, login } from "../../actions/auth";


test('should test login action', () => {
	const action = login( "123ABC" );
	expect( action ).toEqual( {
		type: "LOGIN",
		uid  : "123ABC",
	} );
});

test('should test logout action', () => {
	const action = logout();
	expect( action ).toEqual( {
		type: "LOGOUT",
	} );
});
