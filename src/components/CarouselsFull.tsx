import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgSample from 'assets/img/banner_sample.jpg';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';
import { Link } from 'react-router-dom';

const H2 = styled.h2`
	${SrOnly}
`;
const SliderWrapDiv = styled.div`
	overflow: hidden;
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
		<section>
			<H2>메인배너</H2>
			<SliderWrapDiv>
				<Slider {...settings}>
					<ItemDiv>
						<Link to="/detail">
							<img src={ImgSample} alt="" />
						</Link>
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
			</SliderWrapDiv>
		</section>
	);
};

export default CarouselsFull;
