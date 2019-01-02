import { Link } from "react-router-dom";
import React from "react";

const NotFoundPage = () => <div>
	404! I pity the fool who couldn't find me!
	<Link to="/">Go home</Link>
</div>;

export default NotFoundPage;