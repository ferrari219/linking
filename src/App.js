import React, { Component } from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Button from 'comp/Common/Button';
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
