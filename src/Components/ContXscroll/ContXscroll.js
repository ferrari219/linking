import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import style from './ContXscroll.module.scss';
import banner from '@/img/banner.jpg';
class ContXscroll extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			// centerMode: true,
			lazyLoad: true,
			// autoplay: true,
		};
		return (
			<section className={style.ContXscroll}>
				<h2>플리마켓 일정</h2>
				<Slider {...settings}>
					<div>
						<a href="#">
							<img src={banner} alt="" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src={banner} alt="" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src={banner} alt="" />
						</a>
					</div>
				</Slider>
			</section>
		);
	}
}

export default ContXscroll;
