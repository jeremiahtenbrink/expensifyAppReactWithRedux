import authReducer from "../../reducers/auth";

test( "should set login id to auth state", () => {
	const action = {
		type: "LOGIN",
		uid : "123ABC",
	};
	const state = authReducer( undefined, action );
	expect( state ).toEqual( {
		uid: "123ABC",
	} );
} );

test( "should set logout state", () => {
	const action = {
		type: "LOGOUT",
	};
	const currentState = {
		uid: "123ABC",
	};
	
	const state = authReducer( currentState, action );
	expect( state ).toEqual( {} );
} );