import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
	svg {
		flex: 0 0 2.4rem;
		width: 2.4rem;
		height: auto;
		fill: #888;
	}
	span {
		flex: 1;
		padding: 0 1rem;
		color: #666;
		font-size: 1.6rem;
	}
`;

interface ItabcontdivProps {
	icon: React.ReactNode;
	txt: string;
}

const TabContDiv: React.FunctionComponent<ItabcontdivProps> = ({
	icon,
	txt,
}) => {
	return (
		<Li>
			{icon}
			<span>{txt}</span>
		</Li>
	);
};

export default TabContDiv;
