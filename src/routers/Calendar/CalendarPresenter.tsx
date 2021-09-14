import React, { SyntheticEvent } from 'react';
import Headers from 'components/Headers';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';
import TabCals from 'components/TabCals';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';

const H1 = styled.h1`
	${SrOnly}
`;

const handleBackBtn = (e: SyntheticEvent<EventTarget>) => {
	// console.log('back');
	window.history.back();
};

const CalendarPresenter = () => {
	return (
		<div>
			<H1>상세 일정: 달력</H1>
			<Headers
				left={
					<button onClick={handleBackBtn}>
						<IcoBack />
					</button>
				}
				mid="상세일정"
				dark={true}
			/>
			<TabCals />
		</div>
	);
};

export default CalendarPresenter;
