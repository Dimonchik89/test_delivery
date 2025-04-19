import React from 'react';
import Start from '../icons/Start';
import { v4 as uuidv4 } from 'uuid';

const SliderItem = ({ avatar, name, city, date, text, rating }) => {
	const starCount = new Array(rating).fill('');

	return (
		<div className="swiper-card">
			<div className="swiper-card__header">
				<img src={avatar} alt="user-2" className="swiper-card__img" />
				<div className="swiper-card__user">
					<h3 className="swiper-title">{name}</h3>
					<span className="swiper-subtitle">{city}</span>
					<span>{date}</span>
				</div>
			</div>
			<div className="swiper-content__wrapper">
				<div className="swiper-content">{text}</div>
			</div>
			<div className="swiper-footer">
				{starCount.map((item) => (
					<Start key={uuidv4()} />
				))}
			</div>
		</div>
	);
};

export default SliderItem;
