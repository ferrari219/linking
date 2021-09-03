import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IcoMenu } from 'assets/svg/menu.svg';
import Menus from './Menus';

const Header = styled.header`
	display: flex;
	flex-flow: row;
	align-items: center;
	padding: 0 1rem;
	height: 5rem;
`;
const Left = styled.div`
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
		/* & + button {
			margin-left: 1rem;
		} */
		svg {
			flex: 0 0 2rem;
			width: 100%;
			height: 100%;
		}
	}
	nav {
		position: absolute;
		left: -100%;
		top: 0;
		width: 100vw;
		z-index: 2;
		transition: left 0.2s;
		&.is-active {
			left: 0;
		}
	}
`;
const Mid = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		height: 6vw;
	}
`;
const Right = styled.div`
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

const handleMenuButton = (e: React.SyntheticEvent<EventTarget>) => {
	e.preventDefault();
	// console.log('Menu');
	const menus = document.querySelector('nav') as HTMLParagraphElement;
	menus.classList.add('is-active');
};

interface IheadersProps {
	left?: string | React.ReactNode;
	mid: string | React.ReactNode;
	right?: string | React.ReactNode;
}

const Headers: React.FC<IheadersProps> = ({ left, mid, right }) => {
	return (
		<Header>
			<Left>
				{left}
				<button onClick={handleMenuButton}>
					<IcoMenu />
				</button>
				<nav>
					<Menus />
				</nav>
			</Left>
			<Mid>{mid}</Mid>
			<Right>{right}</Right>
		</Header>
	);
};

export default Headers;
