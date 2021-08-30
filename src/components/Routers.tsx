import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import Home from 'routers/Home';
import Detail from 'routers/Detail';
import Calendar from 'routers/Calendar';
// import Navi from 'routers/Navi';

const Routers = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/detail" component={Detail} />
					<Route path="/calendar" component={Calendar} />
					{/* <Route path="/navi" component={Navi} /> */}
					<Redirect from="*" to="/" />
				</Switch>
			</Router>
		</>
	);
};

export default Routers;
