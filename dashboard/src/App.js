import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import components // to do
import AddService from "./components/AddService";
import ServiceList from "./components/ServiceList";

function App() {
	return (
		<Router>
			<div>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<a href="/users" className="navbar-brand">
						Udaan : Machine Coding Round
					</a>
					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={"/users"} className="nav-link">
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/add"} className="nav-link">
								Register Service
							</Link>
						</li>
					</div>
				</nav>

				<div className="container mt-3">
					<Switch>
						<Route
							exact
							path={["/", "/services"]}
							component={ServiceList}
						/>
						<Route exact path={"/add"} component={AddService} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
