import React from 'react';
import styled from 'styled-components';
import ImgCategory from './ImgCategory';

const WrapDiv = styled.div`
	h2 {
		padding: 2rem 2rem 0rem 2rem;
		font-size: 2.4rem;
		font-weight: 600;
		color: #444;
	}
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 1rem 2rem 2rem 2rem;
	}
`;

interface IimgcategorysProps {
	title: string;
}

const ImgCategorys: React.FunctionComponent<IimgcategorysProps> = ({
	title,
}) => {
	return (
		<WrapDiv>
			<h2>{title}</h2>
			<div>
				<ul>
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
					<ImgCategory />
				</ul>
			</div>
		</WrapDiv>
	);
};

export default ImgCategorys;
