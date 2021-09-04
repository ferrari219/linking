import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IcoClose } from 'assets/svg/close.svg';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';
import CarouselsScrX from './CarouselsScrX';
import ImgCategorys from './ImgCategorys';

const Section = styled.section`
	width: 100%;
	height: 100vh;
	background-color: #fff;
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
			<header>
				<div>
					<button onClick={handleBackBtn}>
						<IcoBack />
					</button>
				</div>
				<div>
					<h2>Menus</h2>
				</div>
				<div>
					<button onClick={handleCloseBtn}>
						<IcoClose />
					</button>
				</div>
			</header>
			<CarouselsScrX title="플리마켓 리스트" />
			<ImgCategorys />
		</Section>
	);
};

export default Menus;
