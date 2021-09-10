import React from 'react';
import Headers from 'components/Headers';
import Logo from 'assets/img/logo.png';
// import { ReactComponent as IcoBack } from 'assets/svg/back.svg';
import Navs from 'components/Navs';
import CarouselsFull from 'components/CarouselsFull';
import MiniCalendar from 'components/MiniCalendar';
import CarouselsScrX from 'components/CarouselsScrX';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';

const H1 = styled.h1`
	${SrOnly}
`;

const HomePresenter = () => {
	return (
		<section>
			<H1>메인페이지</H1>
			<Headers
				// left={
				// 	<button>
				// 		<IcoBack />
				// 	</button>
				// }
				mid={<img src={Logo} alt="리바트링킹" />}
			/>
			<Navs />
			<CarouselsFull />
			<MiniCalendar />
			<CarouselsScrX title="플리마켓 일정" />
			<CarouselsScrX title="베스트 클래스" />
		</section>
	);
};

export default HomePresenter;
