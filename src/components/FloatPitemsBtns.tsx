import React from 'react';
import styled from 'styled-components';

const FloatingDiv = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	flex-flow: row wrap;
	width: 100%;
	height: 7rem;
	button {
		font-size: 2rem;
	}
`;
const ApplyBtn = styled.button`
	flex: 1;
	background-color: #2699fb;
	border: none;
	color: #fff;
`;
const QBtn = styled.button`
	flex: 0 0 8rem;
	background-color: #fff;
	border: 1px solid #ccc;
`;

const FloatPitemsBtns = () => {
	return (
		<FloatingDiv>
			<ApplyBtn>수업 신청하기</ApplyBtn>
			<QBtn>문의</QBtn>
		</FloatingDiv>
	);
};

export default FloatPitemsBtns;
