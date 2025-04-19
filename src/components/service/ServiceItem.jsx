import React from 'react';

const ServiceItem = ({ title, Icon }) => {
	return (
		<li className="flex items-center service-item">
			<Icon />
			<h4 className="service-title">{title}</h4>
		</li>
	);
};

export default ServiceItem;
