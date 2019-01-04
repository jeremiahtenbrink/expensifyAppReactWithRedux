import { NavLink } from "react-router-dom";
import React from "react";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

export const Header = ( {startLogout }) => (
	<header>
		<h1>Expensify</h1>
		<nav>
			<ul>
				<li><NavLink to="/dashboard" activeClassName="is-active" exact={ true }>Dashboard</NavLink></li>
				<li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
			</ul>
			<ul>
				<li><button onClick={startLogout}>Logout</button></li>
			</ul>
		</nav>
	</header>
);

const mapDispatchToProps = ( dispatch ) => ( {
	startLogout: () => dispatch(startLogout()),
} );

export default connect( undefined, mapDispatchToProps )(Header);