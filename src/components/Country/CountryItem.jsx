import React from 'react';

const CountryItem = ({ Icon, title }) => {
	return (
		<li className="info-countries__item">
			<Icon />
			<p>{title}</p>
		</li>
	);
};

export default CountryItem;
