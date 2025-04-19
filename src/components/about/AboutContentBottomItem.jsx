import React from 'react';

const AboutContentBottomItem = ({ Icon, title, subtitle }) => {
	return (
		<div className="flex about-bottom__item">
			<div className="flex about-bottom__item-wrapper">
				<Icon />
				<div className="flex flex-col about-bottom__item-info">
					<p className="about-bottom__subtitle">{subtitle}</p>
					<p className="about-bottom__title">{title}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutContentBottomItem;
