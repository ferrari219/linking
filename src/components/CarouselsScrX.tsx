import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgSample from 'assets/img/banner_sample.jpg';
import styled from 'styled-components';

const H2 = styled.h2`
	padding: 2rem 2rem 0rem 2rem;
	font-size: 2.4rem;
	font-weight: 600;
	color: #444;
`;
const SliderWrapDiv = styled.div`
	overflow: hidden;
`;
const ItemDiv = styled.div`
	padding: 1rem 0 1rem 1rem;
	img {
		width: 100%;
	}
`;

interface IcarouselscrxProps {
	title: string;
}
// 플리마켓 일정
const CarouselsScrX: React.FC<IcarouselscrxProps> = ({ title }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
	};
	return (
		<section>
			<H2>{title}</H2>
			<SliderWrapDiv>
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
			</SliderWrapDiv>
		</section>
	);
};

export default CarouselsScrX;
