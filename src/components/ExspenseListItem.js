import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from 'numeral';

const ExspenseListItem = ( { description, amount, createdAt, id } ) => {
	return (
		<div>
			<h3><Link to={ "/edit/" + id }>{ description }</Link></h3>
			<p>{ numeral(amount /100 ).format('$,0.00') }
			--
				{ moment(createdAt).format('MMMM Do, YYYY') }</p>
		
		</div>
	);
};

export default ExspenseListItem;
ExspenseListItem.propTypes = {};
ExspenseListItem.defaultProps = {};

