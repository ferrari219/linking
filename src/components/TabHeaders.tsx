import React from 'react';
import styled from 'styled-components';

const TabUl = styled.ul`
	margin: 3rem 0 1rem 0;
	display: flex;
	flex-flow: row wrap;
`;

interface ItabheadersProps {
	children: React.ReactNode;
}

const TabHeaders: React.FunctionComponent<ItabheadersProps> = ({
	children,
}) => {
	return <TabUl>{children}</TabUl>;
};

export default TabHeaders;
