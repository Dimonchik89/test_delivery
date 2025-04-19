import React from 'react';

const FooterSocialItem = ({ Icon, url }) => {
	return (
		<li>
			<a className="footer-bottom__social-link" href={url}>
				<Icon />
			</a>
		</li>
	);
};

export default FooterSocialItem;
