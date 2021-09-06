import React from 'react';
import styled from 'styled-components';
import ImgCategory from './ImgCategory';

const WrapDiv = styled.div`
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 2rem;
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
