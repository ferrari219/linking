import React from 'react';
import styled from 'styled-components';
import ImgDetail from 'assets/img/detail_sample.jpg';
import PitemFlags from './PitemFlags';
import PitemFlag from './PitemFlag';
import TabContDivs from './TabContDivs';
import TabContDiv from './TabContDiv';
import { ReactComponent as IcoLocation } from 'assets/svg/location.svg';
import { ReactComponent as IcoClock } from 'assets/svg/clock.svg';
import { ReactComponent as IcoSatis } from 'assets/svg/satis.svg';
import TabHeaders from './TabHeaders';
import TabHeader from './TabHeader';

const PicDiv = styled.div`
	width: 100%;
	img {
		width: inherit;
	}
`;
const ContentDiv = styled.div`
	padding: 2rem;
`;
const PitemInfoDiv = styled.div`
	h2 {
		padding: 0.5rem 0 1rem 0;
		font-size: 2rem;
		font-weight: 600;
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

const Pitems = () => {
	return (
		<>
			<PicDiv>
				<img src={ImgDetail} alt="디테일이미지 샘플" />
			</PicDiv>
			<ContentDiv>
				<PitemInfoDiv>
					<p>원데이클래스</p>
					<h2>
						[기초부터 활용까지]인테리어의 완성, 비누꽃 인테리어하기
					</h2>
					<PitemFlags>
						<PitemFlag title="best" bg="#2699FB" />
						<PitemFlag title="sale" bg="#EA335D" />
					</PitemFlags>
				</PitemInfoDiv>
				<div>
					<TabHeaders>
						<TabHeader tabName="수업소개" isactive={true} />
						<TabHeader tabName="커리큘럼" />
						<TabHeader tabName="일정/장소" />
						<TabHeader tabName="리뷰" />
					</TabHeaders>
					<TabContDivs>
						<div>
							<ul>
								<TabContDiv
									icon={<IcoClock />}
									txt="6/6(토)~7(일) PM 2:00~6:00"
								/>
								<TabContDiv
									icon={<IcoLocation />}
									txt="리바트 스테이 서초점"
								/>
								<TabContDiv
									icon={<IcoSatis />}
									txt="수강 만족도 5/5 만점"
								/>
							</ul>
						</div>
					</TabContDivs>
				</div>
				<PitemPriceDiv>
					<span>4시간 수업</span>
					<strong>64,000원</strong>
				</PitemPriceDiv>
			</ContentDiv>
		</>
	);
};

export default Pitems;
