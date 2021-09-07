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
	// https://xd.adobe.com/view/396a5d24-354e-468e-45e6-cb3d07819689-4f5b/screen/6d629aa4-a2c2-4650-868a-3c91d0f62c51/
	return (
		<Section>
			<Routers />
			<GlobalStyle />
		</Section>
	);
};

export default App;
