import React, { SyntheticEvent } from 'react';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';
import Headers from 'components/Headers';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';
import Pitems from 'components/Pitems';
import FloatPitemsBtns from 'components/FloatPitemsBtns';

const Section = styled.section`
	width: 100%;
`;
const H1 = styled.h1`
	${SrOnly};
`;

const handleBackBtn = (e: SyntheticEvent<EventTarget>) => {
	// console.log('back');
	window.history.back();
};

const DetailPresenter = () => {
	return (
		<Section>
			<H1>상세페이지</H1>
			<Headers
				left={
					<button onClick={handleBackBtn}>
						<IcoBack />
					</button>
				}
				mid="비누꽃 만들기"
			/>
			<Pitems />
			<FloatPitemsBtns />
		</Section>
	);
};

export default DetailPresenter;
