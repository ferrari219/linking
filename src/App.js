import React, { Component } from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';

import logo from '@/img/logo.png';
import banner from '@/img/banner.jpg';
import Menu from 'comp/Layout/Menu';

class App extends Component {
	render() {
		return (
			<div className="wrap">
				<Header logo={logo} />
				<Menu />
				<main>
					<section className="keyBanner">
						<img src={banner} alt="" />
					</section>
					<section>
						<h2>플리마켓 일정</h2>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
