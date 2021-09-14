import React from 'react';
import Headers from 'components/Headers';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';

const H1 = styled.h1`
	${SrOnly}
`;

const CalendarPresenter = () => {
	return (
		<div>
			<H1>상세 일정: 달력</H1>
			<Headers mid="상세일정" dark={true} />
		</div>
	);
};

export default CalendarPresenter;
