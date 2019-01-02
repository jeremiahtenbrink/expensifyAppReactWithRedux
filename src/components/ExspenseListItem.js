import React from "react";
import { Link } from "react-router-dom";

const ExspenseListItem = ( { description, amount, createdAt, id } ) => {
	return (
		<div>
			<h3><Link to={ "/edit/" + id }>{ description }</Link></h3>
			<p>{ amount } -- { createdAt }</p>
		
		</div>
	);
};

export default ExspenseListItem;
ExspenseListItem.propTypes = {};
ExspenseListItem.defaultProps = {};

