import React from 'react';
import styled from 'styled-components';

const FlagDiv = styled.div`
	span {
		padding: 0.3rem 1.5rem;
		border-radius: 0.5rem;
		font-size: 1.3rem;
		& + span {
			margin-left: 0.5rem;
		}
	}
`;

interface IpitemflagsProps {
	children: React.ReactNode;
}

const PitemFlags: React.FunctionComponent<IpitemflagsProps> = ({
	children,
}) => {
	return <FlagDiv>{children}</FlagDiv>;
};

export default PitemFlags;
