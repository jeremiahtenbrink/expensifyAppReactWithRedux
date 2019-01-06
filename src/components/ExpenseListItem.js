import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (

<Link className="list__item" to={`/edit/${id}`}>
    <div>
        <h3 className="list__item--title">{description}</h3>
        <span className="list__item--amount">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>

    <h3 className="list__item--data">
        {numeral(amount / 100).format('$0,0.00')}
    </h3>
</Link>


);

export default ExpenseListItem;
