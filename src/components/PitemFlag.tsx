import React from 'react';
import styled from 'styled-components';

const Button = styled.span<{ bg?: string }>`
	background-color: ${(props) => (props.bg ? props.bg : '#f2f2f2')};
	color: ${(props) => (props.bg ? '#fff' : '444')};
`;

interface IpitemflagProps {
	title?: string;
	bg?: string;
}

const PitemFlag: React.FunctionComponent<IpitemflagProps> = ({ title, bg }) => {
	return <Button bg={bg}>{title}</Button>;
};

export default PitemFlag;
