import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './Home'
import About from './About'
import Login from './Login'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const Navbar = () =>
  <div>
    <NavLink
      to = "/"
      exact
      style = {link}
      activeStyle = {{
        background: 'darkblue'
      }}
    >
      Home
    </NavLink>
    <NavLink
      to = "/about"
      exact
      style = {link}
      activeStyle = {{
        background: 'darkblue'
      }}
    >
      About
    </NavLink>
    <NavLink
      to = "/login"
      exact
      style = {link}
      activeStyle = {{
        background: 'darkblue'
      }}
    >
      Login
    </NavLink>
  </div>

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path = "/" component = {Home} />
      <Route exact path = "/about" component = {About} />
      <Route exact path = "/login" component = {Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
