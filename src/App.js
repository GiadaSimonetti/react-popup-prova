import logo from './logo.svg';
import './App.css';

import PopUp from './PopUp';
import Card from './Card';

import React, { Component } from "react";
import Popup from "reactjs-popup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Title</h1>
        </header>
        <p className="App-intro">
          To see the div click the button.
        </p>

        <PopUp />
      </div>
    );
  }
}

export default App
