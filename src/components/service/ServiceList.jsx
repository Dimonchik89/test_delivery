import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ serviceList }) => {
	return (
		<ul className="service-list">
			{serviceList.map((item) => (
				<ServiceItem key={item.title} {...item} />
			))}
		</ul>
	);
};

export default ServiceList;
