import React, { SyntheticEvent } from 'react';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';
import Headers from 'components/Headers';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';

const H2 = styled.h2`
	${SrOnly};
`;

const handleBackBtn = (e: SyntheticEvent<EventTarget>) => {
	// console.log('back');
	window.history.back();
};

const DetailPresenter = () => {
	return (
		<section>
			<div>
				<H2>상세페이지</H2>
				<Headers
					left={
						<button onClick={handleBackBtn}>
							<IcoBack />
						</button>
					}
					mid="비누꽃 만들기"
				/>
			</div>
		</section>
	);
};

export default DetailPresenter;
