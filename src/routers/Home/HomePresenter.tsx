import React from 'react';
import Headers from 'components/Headers';
import Logo from 'assets/img/logo.png';
import { ReactComponent as IcoBack } from 'assets/svg/back.svg';
import { ReactComponent as IcoMenu } from 'assets/svg/menu.svg';
import { ReactComponent as IcoUser } from 'assets/svg/user.svg';

const HomePresenter = () => {
	return (
		<div>
			<Headers
				left={
					<>
						<IcoBack />
						<IcoMenu />
					</>
				}
				mid={<img src={Logo} alt="리바트링킹" />}
				right={<IcoUser />}
			/>
			Home
		</div>
	);
};

export default HomePresenter;
