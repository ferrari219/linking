import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IcoClose } from 'assets/svg/close.svg';

const Section = styled.section`
	width: 100%;
	height: 100vh;
	background-color: #fff;
`;

const Menus = () => {
	return (
		<Section>
			<h2>Menus</h2>
			<button>
				<IcoClose />
			</button>
		</Section>
	);
};

export default Menus;
