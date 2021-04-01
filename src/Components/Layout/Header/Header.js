import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Header = ({ leftMnu, logo, cotent, rightMnu }) => {
	return (
		<header>
			<div className="leftMnu">
				<button type="button">
					<FontAwesomeIcon icon={faCoffee} />
					<span className="sr-only">메뉴</span>
				</button>
			</div>
			<div className="content">
				<h1>
					<a href="#">로고</a>
				</h1>
				<h2>어디어디</h2>
			</div>
			<div className="rightMnu">
				<button type="button">버튼</button>
			</div>
		</header>
	);
};

export default Header;
