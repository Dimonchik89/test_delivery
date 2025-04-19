import React from 'react';
import Form from '../form/Form';
import Phone from '../icons/Phone';
import Email from '../icons/Email';

const FooterFeedbackBottom = () => {
	return (
		<div className="flex flex-col footer-feedback__bottom">
			<Form />
			<ul className="footer-feedback__social footer-social">
				<li>
					<a href="milto::+380735555555" className="flex items-center footer-social__link">
						<Phone />
						<span className="footer-text">+ 38 (073) 555 55 55</span>
					</a>
				</li>
				<li>
					<a href="milto:template@gmail.com" className="flex items-center footer-social__link">
						<Email />
						<span className="footer-text">+ 38 (073) 555 55 55</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FooterFeedbackBottom;
