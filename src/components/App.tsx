import React from 'react';
import GlobalStyle from 'components/styles/globalStyle';
import Routers from './Routers';
import styled from 'styled-components';

const Section = styled.section`
	width: 100%;
	max-width: 89rem;
	margin: 0 auto;
	/* background-color: #f2f2f2; */
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
