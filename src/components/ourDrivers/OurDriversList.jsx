import React from 'react';
import OurDriverItem from './OurDriverItem';
import { drivers } from '../../constants/driversConstants';

const OurDriversList = () => {
	return (
		<ul className="drivers-list">
			{drivers.map((item) => (
				<OurDriverItem key={item.name} {...item} />
			))}
		</ul>
	);
};

export default OurDriversList;
