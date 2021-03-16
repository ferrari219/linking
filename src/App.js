import React, { Component } from 'react';
import Header from 'comp/Header';
import Footer from 'comp/Footer';
import Button from 'comp/Button';
class App extends Component {
	render() {
		return (
			<div>
				<Button name="test" lnk="http://naver.com" stl="primary size1" />
				<Button name="test" lnk="http://naver.com" stl="primary size2" />
				<Button name="test" lnk="http://naver.com" stl="primary size3" />
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
