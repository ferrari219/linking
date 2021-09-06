import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IcoClose } from 'assets/svg/close.svg';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';
import CarouselsScrX from './CarouselsScrX';
import ImgCategorys from './ImgCategorys';
import Searchs from './Searchs';

const Section = styled.section`
	position: fixed;
	width: 100%;
	height: 100vh;
`;
const DimmedDiv = styled.div`
	display: none;
	/* position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.7; */
`;
const WrapDiv = styled.div`
	position: relative;
	height: inherit;
	background-color: #fff;
	z-index: 2;
	header {
		display: flex;
		flex-flow: row wrap;
		height: 5rem;
	}
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
		background-color: #fff;
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
		background-color: #fff;
		border: none;
		svg {
			flex: 0 0 2rem;
			width: 100%;
			height: 100%;
		}
	}
`;

const handleBackBtn = (e: React.SyntheticEvent<EventTarget>) => {
	e.preventDefault();
	const menus = document.querySelector('nav') as HTMLParagraphElement;
	menus.classList.remove('is-active');
};
const handleCloseBtn = (e: React.SyntheticEvent<EventTarget>) => {
	e.preventDefault();
	console.log('close');
	const menus = document.querySelector('nav') as HTMLParagraphElement;
	menus.classList.remove('is-active');
};

const Menus = () => {
	return (
		<Section>
			<DimmedDiv />
			<WrapDiv>
				<header>
					<LeftDiv>
						<button onClick={handleBackBtn}>
							<IcoBack />
						</button>
					</LeftDiv>
					<MidDiv>
						<h2>Menus</h2>
					</MidDiv>
					<RightDiv>
						<button onClick={handleCloseBtn}>
							<IcoClose />
						</button>
					</RightDiv>
				</header>
				<Searchs />
				<CarouselsScrX title="플리마켓 리스트" />
				<ImgCategorys title="원데이 클래스" />
			</WrapDiv>
		</Section>
	);
};

export default Menus;
