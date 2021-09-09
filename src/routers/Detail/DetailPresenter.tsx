import React, { SyntheticEvent } from 'react';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';
import Headers from 'components/Headers';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';

const H1 = styled.h1`
	${SrOnly};
`;

const handleBackBtn = (e: SyntheticEvent<EventTarget>) => {
	// console.log('back');
	window.history.back();
};

const DetailPresenter = () => {
	return (
		<section>
			<H1>상세페이지</H1>
			<Headers
				left={
					<button onClick={handleBackBtn}>
						<IcoBack />
					</button>
				}
				mid="비누꽃 만들기"
			/>
			<div>img</div>
			<div>
				{/* PitemHeaderInfo */}
				<h2>[기초부터 활용까지]인테리어의 꽃 비누꽃 인테리어</h2>
				<div>
					<ul>
						<li>
							<a href="#">수업소개</a>
						</li>
						<li>
							<a href="#">커리큘럼, 일정/장소, 리뷰</a>
						</li>
					</ul>
					<div>
						6/6(토)~7(일) PM 2:00~6:00
						<br />
						리바트 스테이 서초점
						<br />
						수강 만족도
					</div>
				</div>
				<div>
					PitemPrice
					<span>4시간 수업</span>
					64,000원
				</div>
			</div>
		</section>
	);
};

export default DetailPresenter;
