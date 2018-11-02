import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';
import logo from '../assets/logo.svg'

class NavBar extends Component {
  render() {
    return (
      <header>
    <div class="container">
      <img class="logo" src={logo}></img>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/upcoming-events">Upcoming Events</Link></li>
        </ul>
      </nav>
    </div>
  </header>
    );
  }
}

export default NavBar;
