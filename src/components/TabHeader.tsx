import React from 'react';
import styled from 'styled-components';

const Li = styled.li<{ isactive?: boolean }>`
	flex: 1;
	& + li {
		margin-left: 1px;
	}
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 4rem;
		background-color: ${(props) => (props.isactive ? '#fff' : '#f2f2f2')};
		border: 1px solid ${(props) => (props.isactive ? '#ccc' : 'none')};
		border-bottom: none;
		font-size: 1.5rem;
	}
`;

interface ItabheaderProps {
	tabName?: string;
	isactive?: boolean;
}

const TabHeader: React.FunctionComponent<ItabheaderProps> = ({
	tabName,
	isactive,
}) => {
	return (
		<Li isactive={isactive}>
			<a href="https://">{tabName}</a>
		</Li>
	);
};

export default TabHeader;
