import React from 'react';
import Headers from 'components/Headers';
import Logo from 'assets/img/logo.png';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';
import { ReactComponent as IcoUser } from 'assets/svg/user.svg';
import Navs from 'components/Navs';
import CarouselsFull from 'components/CarouselsFull';
import MiniCalendar from 'components/MiniCalendar';
import CarouselsScrX from 'components/CarouselsScrX';

const HomePresenter = () => {
	return (
		<div>
			<Headers
				left={
					<button>
						<IcoBack />
					</button>
				}
				mid={<img src={Logo} alt="리바트링킹" />}
				right={
					<button>
						<IcoUser />
					</button>
				}
			/>
			<Navs />
			<CarouselsFull />
			<MiniCalendar />
			<CarouselsScrX title="플리마켓 일정" />
			<CarouselsScrX title="베스트 클래스" />
		</div>
	);
};

export default HomePresenter;
