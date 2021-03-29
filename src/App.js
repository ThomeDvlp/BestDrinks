import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route, useParams} from "react-router-dom";
import Header from './Comps/Header';
import About from './Comps/About';
import Home from './Comps/Home';
import Contact from './Comps/Contact';
import Footer from './Comps/Footer';
import SearchApi from './Comps/SearchApi/SearchApi';
import PageNotFound from './Comps/PageNotFound/PageNotFound';

import './assets/App.css';

const App =()=> {

	return ( 								 
		<main className = "app__content" >		
		<Router >
			<Header className = "Header" / >
			<Switch >
				<Route path = "/contact" >
					<Contact text="Contact"/ > 
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home /> 
				</Route>
				<Route path="/Randon">
					<SearchApi/>
				</Route>
				<Route path='*'>
					<PageNotFound/>
				</Route>
			</Switch>
			<Footer className = "Footer" / >
		</Router>
		</main>
	);
}

export default App;