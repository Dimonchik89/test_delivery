import React from 'react';
import FooterSocialItem from './FooterSocialItem';
import { v4 as uuidv4 } from 'uuid';

const FooterSocialList = ({ footerSocial }) => {
	return (
		<ul className="footer-bottom__social-list">
			{footerSocial.map((item) => (
				<FooterSocialItem key={uuidv4} {...item} />
			))}
		</ul>
	);
};

export default FooterSocialList;
