import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
	return (
		<div className="UserOutput">
			<p>My username is {props.username}</p>
			<p>My username is Angie</p>
		</div>
	);
};

export default useroutput;
