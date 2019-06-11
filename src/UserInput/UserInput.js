import React from 'react';

const userinput = (props) => {
	const style = {
		border: '3px solid yellow'
	};
	return <input type="text" style={style} onChange={props.onInput} value={props.currentUser} />;
};

export default userinput;
