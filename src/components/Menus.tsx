import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IcoClose } from 'assets/svg/close.svg';
// import { ReactComponent as IcoBack } from 'assets/svg/back.svg';
import CarouselsScrX from './CarouselsScrX';
import ImgCategorys from './ImgCategorys';
import Searchs from './Searchs';
import { SrOnly } from 'components/styles/globalStyle';

const Section = styled.section`
	position: fixed;
	width: 100%;
	height: 100vh;
`;
const H2 = styled.h2`
	${SrOnly};
`;
const DimmedDiv = styled.div`
	/* display: none; */
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.7;
`;
const WrapDiv = styled.div`
	position: relative;
	width: 80%;
	height: inherit;
	background-color: #f5f5f5;
	color: #333;
	z-index: 2;
	svg {
		fill: #333;
	}
`;
const Div = styled.div`
	display: flex;
	flex-flow: row wrap;
	height: 5rem;
	padding: 0 2rem;
`;
const LeftDiv = styled.div`
	flex: 0 0 8rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 100%;
		background-color: transparent;
		border: none;
		svg {
			flex: 0 0 2rem;
			width: 100%;
			height: 100%;
		}
	}
`;
const MidDiv = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const RightDiv = styled.div`
	flex: 0 0 8rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 100%;
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 100%;
		background-color: transparent;
		border: none;
		svg {
			flex: 0 0 2rem;
			width: 100%;
			height: 100%;
			fill: #333;
		}
	}
`;

const handleCloseBtn = (e: React.SyntheticEvent<EventTarget>) => {
	e.preventDefault();
	console.log('close');
	const menus = document.querySelector('nav') as HTMLParagraphElement;
	menus.classList.remove('is-active');
};

const Menus = () => {
	return (
		<Section>
			<H2>상세페이지</H2>
			<DimmedDiv />
			<WrapDiv>
				<Div>
					<LeftDiv />
					<MidDiv>
						<h2>Menus</h2>
					</MidDiv>
					<RightDiv>
						<button onClick={handleCloseBtn}>
							<IcoClose />
						</button>
					</RightDiv>
				</Div>
				<Searchs />
				<CarouselsScrX title="플리마켓 리스트" />
				<ImgCategorys title="원데이 클래스" />
			</WrapDiv>
		</Section>
	);
};

export default Menus;
