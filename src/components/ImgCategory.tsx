import React from 'react';
import { ReactComponent as User } from 'assets/svg/user.svg';
import styled from 'styled-components';

const Li = styled.li`
	padding: 1rem;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #444;
		padding: 2rem;
		border-radius: 50%;
		svg {
			fill: #fff;
		}
	}
`;

const ImgCategory = () => {
	return (
		<Li>
			<a href="http://">
				<User />
			</a>
		</Li>
	);
};

export default ImgCategory;
