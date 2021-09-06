import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IcoSearch } from 'assets/svg/search.svg';

const Section = styled.section`
	padding: 1rem 2rem;
	form {
		display: flex;
		flex-flow: row wrap;
	}
	input {
		flex: 1;
		border: 1px solid #ccc;
		border-radius: 1rem 0 0 1rem;
	}
	button {
		flex: 0 0 4rem;
		background-color: #444;
		padding: 1rem;
		border-radius: 0 1rem 1rem 0;
		svg {
			fill: #fff;
		}
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
