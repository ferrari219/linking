import React from 'react';
import styled from 'styled-components';

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

interface IheadersProps {
	left?: string | React.ReactNode;
	mid: string | React.ReactNode;
	right?: string | React.ReactNode;
}

const Headers: React.FC<IheadersProps> = ({ left, mid, right }) => {
	return (
		<Header>
			<Left>{left}</Left>
			<Mid>{mid}</Mid>
			<Right>{right}</Right>
		</Header>
	);
};

export default Headers;
