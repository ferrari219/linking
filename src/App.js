import React, { Component } from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
class App extends Component {
	render() {
		return (
			<div className="wrap">
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
