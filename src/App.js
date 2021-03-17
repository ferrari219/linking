import React, { Component } from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Button from 'comp/Common/Button';
class App extends Component {
	render() {
		return (
			<div>
				<Button name="test" lnk="http://naver.com" stl="primary size1" />
				<Button name="test" lnk="http://naver.com" stl="primary size2 radius" />
				<Button name="test" lnk="http://naver.com" stl="primary size3" />
				<Button name="test" lnk="http://naver.com" stl="outline size2" />
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
