import React from 'react';
import style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ leftMnu, logo, cotent, rightMnu }) => {
	return (
		<header className={style.header}>
			<div className={style.leftMnu}>
				<button type="button" className="icon-btn">
					<FontAwesomeIcon icon={faBars} />
					<span className="sr-only">메뉴</span>
				</button>
			</div>
			<div className={style.content}>
				<h1>
					<a href="#">
						<img src="https://static.hyundailivart.co.kr/assets/images/common/new_logo.png" alt="로고" />
					</a>
				</h1>
				{/* <h2>어디어디</h2> */}
			</div>
			<div className={style.rightMnu}>
				<button type="button" className="icon-btn">
					<FontAwesomeIcon icon={faSearch} />
					<span className="sr-only">검색</span>
				</button>
				<button type="button" className="icon-btn">
					<FontAwesomeIcon icon={faUser} />
					<span className="sr-only">로그인</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
