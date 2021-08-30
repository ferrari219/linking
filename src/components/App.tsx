import React from 'react';
import GlobalStyle from 'components/styles/globalStyle';
import Routers from './Routers';
import styled from 'styled-components';

const Section = styled.section`
	max-width: 89rem;
	background-color: #eee;
`;

const App = () => {
	return (
		<Section>
			<Routers />
			<GlobalStyle />
		</Section>
	);
};

export default App;
