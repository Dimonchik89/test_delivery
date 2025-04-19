import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FooterNavListItem from './FooterNavListItem';

const FooterNavList = ({ title, links }) => {
	return (
		<div className="flex flex-col footer-nav">
			<h4 className="footer-title">{title}</h4>
			<ul className="flex flex-col footer-nav__list">
				{links.map((item) => (
					<FooterNavListItem key={uuidv4()} {...item} />
				))}
			</ul>
		</div>
	);
};

export default FooterNavList;
