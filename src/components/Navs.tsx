import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const data = [
	{
		id: 0,
		name: '이 달의 행사',
		lnk: '',
	},
	{
		id: 1,
		name: '베스트클래스',
		lnk: '',
	},
	{
		id: 2,
		name: '플리마켓 일정',
		lnk: '',
	},
	{
		id: 3,
		name: '이 달의 행사',
		lnk: '',
	},
	{
		id: 4,
		name: '베스트클래스',
		lnk: '',
	},
	{
		id: 5,
		name: '플리마켓 일정',
		lnk: '',
	},
];

const Ul = styled.ul`
	display: flex;
	white-space: nowrap;
	overflow: auto;
	li {
		padding: 1rem;
	}
`;

const Navs = () => {
	return (
		<Ul>
			{data.map((item) => (
				<li key={item.id}>
					{/* <Link to={item.lnk}> */}
					{item.name}
					{/* </Link> */}
				</li>
			))}
		</Ul>
	);
};

export default Navs;
