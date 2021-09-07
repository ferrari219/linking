import React from 'react';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';

const H2 = styled.h2`
	${SrOnly};
`;

const DetailPresenter = () => {
	return (
		<section>
			<div>
				<H2>상세페이지</H2>
				test
			</div>
		</section>
	);
};

export default DetailPresenter;
