import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import './slider.scss';

const Slider = () => {
	return (
		<div className="main">
			<div className="container">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
					>
					<div className="swiper-text">
						<h1 className="swiper-text-title">Big Holiday Sale</h1>
						<span className="swiper-sale">Up to -50%</span>
						</div>
						
						<SwiperSlide className='swiper-text'><h1>Slide 1</h1></SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
				</Swiper>
	  	</div>
	  </div>

	)
}

export default Slider;