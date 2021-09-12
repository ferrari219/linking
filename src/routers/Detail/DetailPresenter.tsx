import React, { SyntheticEvent } from 'react';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';
import Headers from 'components/Headers';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';
import ImgDetail from 'assets/img/detail_sample.jpg';
import { ReactComponent as IcoLocation } from 'assets/svg/location.svg';
import { ReactComponent as IcoClock } from 'assets/svg/clock.svg';

const Section = styled.section`
	width: 100%;
`;
const H1 = styled.h1`
	${SrOnly};
`;
const PicDiv = styled.div`
	width: 100%;
	img {
		width: inherit;
	}
`;
const ContentDiv = styled.div`
	padding: 2rem;
`;
const PitemHeaderInfoDiv = styled.div`
	h2 {
		padding: 0.5rem 0 1rem 0;
		font-size: 2rem;
		font-weight: 600;
	}
`;
const FlagDiv = styled.div`
	span {
		padding: 0.3rem 1.5rem;
		background-color: #f2f2f2;
		border-radius: 0.5rem;
		font-size: 1.3rem;
		& + span {
			margin-left: 0.5rem;
		}
	}
`;
const TabUl = styled.ul`
	margin: 3rem 0 1rem 0;
	display: flex;
	flex-flow: row wrap;
	li {
		flex: 1;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 4rem;
			background-color: #f2f2f2;
			font-size: 1.5rem;
		}
	}
`;
const PitemPriceDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem 0;
	padding: 1.5rem 2rem;
	background-color: #f2f2f2;
	border-radius: 1rem;
	span {
		font-size: 1.6rem;
	}
	strong {
		font-weight: 600;
		font-size: 2.4rem;
	}
`;
const FloatingDiv = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	flex-flow: row wrap;
	width: 100%;
	height: 7rem;
	button {
		font-size: 2rem;
	}
`;
const ApplyBtn = styled.button`
	flex: 1;
	background-color: #2699fb;
	border: none;
	color: #fff;
`;
const QBtn = styled.button`
	flex: 0 0 8rem;
	background-color: #fff;
	border: 1px solid #ccc;
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
			<PicDiv>
				<img src={ImgDetail} alt="디테일이미지 샘플" />
			</PicDiv>
			<ContentDiv>
				{/* PitemHeaderInfo */}
				<PitemHeaderInfoDiv>
					<p>원데이클래스</p>
					<h2>
						[기초부터 활용까지]인테리어의 완성, 비누꽃 인테리어하기
					</h2>
					<FlagDiv>
						<span>Best</span>
						<span>Sale</span>
					</FlagDiv>
				</PitemHeaderInfoDiv>
				<div>
					<TabUl>
						<li>
							<a href="https://">수업소개</a>
						</li>
						<li>
							<a href="https://">커리큘럼</a>
						</li>
						<li>
							<a href="https://">일정/장소</a>
						</li>
						<li>
							<a href="https://">리뷰</a>
						</li>
					</TabUl>
					<div>
						<div>
							<ul>
								<li>
									<IcoClock />
									6/6(토)~7(일) PM 2:00~6:00
								</li>
								<li>
									<IcoLocation />
									리바트 스테이 서초점
								</li>
								<li>수강 만족도</li>
							</ul>
							<br />

							<br />
						</div>
					</div>
				</div>
				<PitemPriceDiv>
					<span>4시간 수업</span>
					<strong>64,000원</strong>
				</PitemPriceDiv>
			</ContentDiv>
			<FloatingDiv>
				<ApplyBtn>수업 신청하기</ApplyBtn>
				<QBtn>문의</QBtn>
			</FloatingDiv>
		</Section>
	);
};

export default DetailPresenter;
