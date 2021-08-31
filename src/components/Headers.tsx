import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	flex-direction: row;
	height: 5rem;
`;
const Left = styled.div`
	flex: 0 0 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: red;
`;
const Mid = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background: yellow;
`;
const Right = styled.div`
	flex: 0 0 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: red;
`;

interface IheadersProps {
	left?: string;
	mid: string;
	right?: string;
}

const Headers: React.FC<IheadersProps> = ({ left, mid, right }) => {
	return (
		<Header>
			{left && <Left>{left}</Left>}
			<Mid>{mid}</Mid>
			{right && <Right>{right}</Right>}
		</Header>
	);
};

export default Headers;
