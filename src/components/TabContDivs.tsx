import React from 'react';
import styled from 'styled-components';

const TabContDiv = styled.div`
	ul {
		padding: 1rem;
	}
	li {
		display: flex;
		flex-flow: row wrap;
		padding: 0.5rem 0;
	}
`;

interface ItabcontdivsProps {
	children: React.ReactNode;
}

const TabContDivs: React.FunctionComponent<ItabcontdivsProps> = ({
	children,
}) => {
	return <TabContDiv>{children}</TabContDiv>;
};

export default TabContDivs;
