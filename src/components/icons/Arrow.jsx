import React from 'react';

const Arrow = ({ style = {} }) => {
	return (
		<svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19 8.5L12 15.5L5 8.5" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export default Arrow;
