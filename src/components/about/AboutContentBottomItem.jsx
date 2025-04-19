import React from 'react';

const AboutContentBottomItem = ({ Icon, title, subtitle }) => {
	return (
		<div className="flex about-bottom__item">
			<Icon />
			<div className="flex flex-col ">
				<p className="about-bottom__subtitle">{subtitle}</p>
				<p className="about-bottom__title">{title}</p>
			</div>
		</div>
	);
};

export default AboutContentBottomItem;
