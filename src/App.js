import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Nerdy Movies</h2>
        </div>
        <p className="App-intro">
          This is the nerdy movies sample web app
        </p>
      </div>
    );
  }
}

export default App;
