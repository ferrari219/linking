import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	flex-flow: row;
	align-items: center;
	height: 5rem;
`;
const Left = styled.div`
	flex: 0 0 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	button {
		display: block;
		width: 100%;
		height: 100%;
		background-color: red;
		border: none;
	}
`;
const Mid = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Right = styled.div`
	flex: 0 0 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	button {
		display: block;
		width: 100%;
		height: 100%;
		background-color: red;
		border: none;
	}
`;

interface IheadersProps {
	left?: string;
	mid: string;
	right?: string;
}

const Headers: React.FC<IheadersProps> = ({ mid }) => {
	return (
		<Header>
			<Left>
				<button>left</button>
			</Left>
			<Mid>mid</Mid>
			<Right>
				<button>right</button>
			</Right>
		</Header>
	);
};

export default Headers;
