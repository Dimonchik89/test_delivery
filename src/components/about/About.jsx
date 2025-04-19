import React from 'react';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Container from '../container/Container';
import AboutContent from './AboutContent';

import '../../styles/about.css';

const About = () => {
	return (
		<div className="about">
			<Container>
				<div className="about-wrapper">
					<Breadcrumbs />
					<div className="about-container">
						<img className="about-container__img" src="/auto.svg" alt="auto" />
						<AboutContent />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default About;
