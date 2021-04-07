import React, { Component } from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';

import logo from '@/img/logo.png';
import Menu from 'comp/Layout/Menu';

import KeyBanner from 'comp/KeyBanner';
import ContXscroll from 'comp/ContXscroll';

class App extends Component {
	render() {
		return (
			<div className="wrap">
				<Header logo={logo} />
				<Menu />
				<main>
					<KeyBanner />
					<ContXscroll />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
