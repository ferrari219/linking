import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let data = Array.from({ length: 30 }, (v, i) => i + 1);
// console.log(data);

const Section = styled.section`
	padding: 1rem 2rem;
	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 4rem;
	}
`;
const TitleDiv = styled.div`
	flex: 0 0 5rem;
	font-weight: 600;
`;
const CalendarDiv = styled.div`
	flex: 1;
	/* padding: 0.5rem; */
	ul {
		display: flex;
		flex-flow: nowrap;
		overflow: auto;
		/* white-space: nowrap; */
		li {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			background-color: #444;
			color: #fff;
			& + li {
				margin-left: 0.5rem;
			}
		}
	}
`;

const MiniCalendar = () => {
	return (
		<Section>
			<Link to="#">
				<TitleDiv>
					<h2>6월</h2>
				</TitleDiv>
				<CalendarDiv>
					<ul>
						{data.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</CalendarDiv>
			</Link>
		</Section>
	);
};

export default MiniCalendar;
