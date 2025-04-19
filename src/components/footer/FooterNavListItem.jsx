import React from 'react';

const FooterNavListItem = ({ title, url }) => {
	return (
		<li className="footer-text">
			<a href={url}>{title}</a>
		</li>
	);
};

export default FooterNavListItem;
