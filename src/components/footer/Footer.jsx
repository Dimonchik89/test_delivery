import React from 'react';
import Container from '../container/Container';
import FooterLogo from '../icons/FooterLogo';
import { v4 as uuidv4 } from 'uuid';
import FooterNavList from './FooterNavList';
import FooterFeedbackHeader from './FooterFeedbackHeader';
import FooterFeedbackBottom from './FooterFeedbackBottom';
import { footerNavigation, footerSocial } from '../../constants/footerContants';
import FooterSocialList from './FooterSocialList';

import '../../styles/footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<Container>
				<div className="footer-wrapper">
					<div className="flex flex-col footer-about">
						<FooterLogo />
						<span className="footer-about__text">Платформа пошуку перевізників та бронювання поїздок</span>
					</div>
					<div className="footer-info">
						{footerNavigation.map((item) => (
							<FooterNavList key={uuidv4()} title={item.title} links={item.links} />
						))}
						<div className="footer-info__feedback footer-feedback">
							<FooterFeedbackHeader />
							<FooterFeedbackBottom />
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<span className="footer-copyright">2024 @ Sprinters. All rights reserved.</span>

					<div className="footer-bottom__social">
						<FooterSocialList footerSocial={footerSocial} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
