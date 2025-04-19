import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SliderItem from './SliderItem';
import { v4 as uuidv4 } from 'uuid';
import { sliderList } from '../../constants/sliderConstants';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/swiper.css';

const Slider = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={32}
				pagination={{
					clickable: true,
					renderBullet: (index, className) => {
						return `<span class="${className} custom-dot"></span>`;
					},
				}}
				breakpoints={{
					480: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{sliderList.map((item) => (
					<SwiperSlide key={uuidv4()}>
						<SliderItem {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
