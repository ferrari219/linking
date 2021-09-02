import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgSample from 'assets/img/banner.jpg';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';

const H2 = styled.h2``;
const ItemDiv = styled.div`
	img {
		width: 100%;
	}
`;

const CarouselsScrX = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<H2>플리마켓 일정</H2>
			<Slider {...settings}>
				<ItemDiv>
					{/* <a> */}
					<img src={ImgSample} alt="" />
					{/* </a> */}
				</ItemDiv>
				<ItemDiv>
					<img src={ImgSample} alt="" />
				</ItemDiv>
				<ItemDiv>
					<img src={ImgSample} alt="" />
				</ItemDiv>
				<ItemDiv>
					<img src={ImgSample} alt="" />
				</ItemDiv>
				<ItemDiv>
					<img src={ImgSample} alt="" />
				</ItemDiv>
				<ItemDiv>
					<img src={ImgSample} alt="" />
				</ItemDiv>
			</Slider>
		</div>
	);
};

export default CarouselsScrX;
