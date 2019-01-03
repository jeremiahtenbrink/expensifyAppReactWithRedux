import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<nav>
			<ul>
				<li><NavLink to="/" activeClassName="is-active" exact={ true }>Dashboard</NavLink></li>
				<li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
			</ul>
		</nav>
	</header>
);

export default Header;