import React from 'react';
import Container from '../container/Container';
import OurDriversList from './OurDriversList';

import '../../styles/ourDrivers.css';

const OurDrivers = () => {
	return (
		<div className="drivers">
			<Container>
				<div className="drivers-wrapper">
					<div className="flex items-center justify-between">
						<h3 className="title">Наші водії</h3>
						<button className="button-link">Усі водії (7)</button>
					</div>

					<OurDriversList />
				</div>
			</Container>
		</div>
	);
};

export default OurDrivers;
