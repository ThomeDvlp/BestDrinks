import React, { Component } from 'react';
import Contact from './Comps/Contact';
import './assets/App.css';
import './Comps/Contact/index.js';

class App extends Component {
	render() {
		return (
      		<section className="conteudo">
          		<Contact/>
      		</section>
    		);
  	}
}

export default App;
