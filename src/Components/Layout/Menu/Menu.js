import React from 'react';
import style from './Menu.module.scss';

const Menu = () => {
	return (
		<nav className={style.topMenu}>
			<ul>
				<li>
					<a href="#">이 달의 행사</a>
				</li>
				<li>
					<a href="#">베스트클래스</a>
				</li>
				<li>
					<a href="#">플리마켓 일정</a>
				</li>
				<li>
					<a href="#">이벤트</a>
				</li>
				<li>
					<a href="#">이벤트</a>
				</li>
				<li>
					<a href="#">이벤트</a>
				</li>
				<li>
					<a href="#">이벤트</a>
				</li>
				<li>
					<a href="#">이벤트</a>
				</li>
				<li>
					<a href="#">이벤트</a>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
