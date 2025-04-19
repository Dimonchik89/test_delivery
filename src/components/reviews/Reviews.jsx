import React from 'react';
import ReviewBg from '../icons/review/ReviewBg';
import Container from '../container/Container';
import Slider from '../slider/Slider';
import '../../styles/review.css';

const Reviews = () => {
	return (
		<div className="review">
			<ReviewBg />
			<Container>
				<div className="review-wrapper">
					<div className="review-content">
						<div className="review-left">
							<h2 className="review-title">
								Що <span className="review-title review-title__blue">кажуть люди?</span>
							</h2>
							<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
						</div>
						<button className="button">Залишити відгук</button>
					</div>

					<div className="review-slider">
						<Slider />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Reviews;
