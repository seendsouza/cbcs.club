import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'; 
import Footer from './components/footer';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
