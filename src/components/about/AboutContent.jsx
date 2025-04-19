import React from 'react';
import Planet from '../icons/Planet';
import Phone from '../icons/Phone';
import AboutContentBottomItem from './AboutContentBottomItem';
import { aboutBottomList } from '../../constants/aboutConstants';

const AboutContent = () => {
	return (
		<div className="about-content">
			<div className="flex items-center about-top">
				<h2 className="about-title">Stripe</h2>
				<p className="about-count">43 Поїздок</p>
			</div>
			<div className="flex about-center">
				<a href="" className="flex item-center about-link">
					<Planet />
					https://stripe.com
				</a>
				<a href="milto::+380735555555" className="flex item-center about-link">
					<Phone />
					+38 (073) 555 55 55
				</a>
			</div>
			<div className="about-bottom">
				{aboutBottomList.map((item) => (
					<AboutContentBottomItem key={item.title} {...item} />
				))}
			</div>
		</div>
	);
};

export default AboutContent;
