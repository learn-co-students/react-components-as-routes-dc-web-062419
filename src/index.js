import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Login from './login'
import About from './about'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => {
  return (
  <div>
    <NavLink to="/" style={link} activeStyle={{background: 'magenta'}} >Home</NavLink>
    <NavLink to="/about" style={link} activeStyle={{background: 'darkblue' }}>About</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue' }}>Login</NavLink>
  </div>
  )// Taking out the "exact" here and below in the router does not seem to have an effect wrt the secondary links
}

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const AnythingElse = () => {
  return (
    <h5>Anything Else</h5>
  )
}

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path='/' render={Home}/>
      <Route path='/else' render={AnythingElse}/>
      <Route path='/about' render={About}/>
      <Route exact path='/login' component={Login}/>
    </React.Fragment>
  </Router>,
  // <Home />,
  document.getElementById('root')
);
