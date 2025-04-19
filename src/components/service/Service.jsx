import React from 'react';
import Container from '../container/Container';
import ServiceList from './ServiceList';
import { serviceList } from '../../constants/serviceConstants';
import '../../styles/service.css';

const Service = () => {
	return (
		<div className="service">
			<Container>
				<div className="flex flex-col service-wrapper">
					<div className="flex flex-col service-header">
						<h3 className="title">Сервіс</h3>
						<span className="text">Найкращі умови для вашого комфорту</span>
					</div>
					<div>
						<ServiceList serviceList={serviceList} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Service;
