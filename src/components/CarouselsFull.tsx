import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgSample from 'assets/img/banner.jpg';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';

const H2 = styled.h2`
	${SrOnly}
`;
const ItemDiv = styled.div`
	img {
		width: 100%;
	}
`;

const CarouselsFull = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<H2>메인배너</H2>
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

export default CarouselsFull;
