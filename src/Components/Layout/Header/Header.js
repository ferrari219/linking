import React from 'react';

const Header = ({ leftMnu, logo, cotent, rightMnu }) => {
	return (
		<header>
			<div className="leftMnu">
				<button type="button">버튼</button>
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
