import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IcoSearch } from 'assets/svg/search.svg';

const Section = styled.section`
	padding: 2rem;
	form {
		display: flex;
		flex-flow: row wrap;
	}
	input {
		flex: 1;
	}
	button {
		flex: 0 0 3rem;
	}
`;

const Searchs = () => {
	return (
		<Section>
			<form>
				<input type="text" />
				<button>
					<IcoSearch />
				</button>
			</form>
		</Section>
	);
};

export default Searchs;
