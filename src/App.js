import React, { Component } from 'react';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, NavLink, Route , } from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
  return (
  <Router>
    <div className="App">
      <header className=" fixed w-100 pa3 ph5-ns calisto">
        <nav className='flex justify-end'>
          <p className='f3 link dim black pa3 pointer mt0'><NavLink to='/'>Home</NavLink></p>
          <p className='f3 link dim black pa3 pointer mt0'><NavLink to='/resume'>Resume</NavLink></p>
          <p className='f3 link dim black pa3 pointer mt0'><NavLink to='/projects'>Projects</NavLink></p>
          <p className='f3 link dim black pa3 pointer mt0'><NavLink to='/contact'>Contact</NavLink></p>
        </nav>
      </header>
    </div>
    <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    </div>
            
  </Router>
  );
}
 
}

export default App;
