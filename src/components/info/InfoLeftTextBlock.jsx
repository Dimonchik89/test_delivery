import React from 'react';
import Twitter from '../icons/Twitter';
import Facebook from '../icons/Facebook';

const InfoLeftTextBlock = () => {
	return (
		<>
			<div className="mb-24">
				<h3 className="title mb-16">Опис перевізника</h3>
				<span className="text">
					Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business
					models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems
					necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
				</span>
			</div>
			<div className="info-social mb-40">
				<h3 className="title">Ми у соц. мережах</h3>
				<div className="info-social__buttons mt-16 flex">
					<button className="button-outline">
						<Twitter />
						twitter.com/stripe
					</button>
					<button className="button-outline">
						<Facebook />
						facebook.com/StripeHQ
					</button>
				</div>
			</div>
		</>
	);
};

export default InfoLeftTextBlock;
