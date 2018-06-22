import logo from './logo.svg';
import './App.css';

import Menu from "./Menu";

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

        <Menu />
      </div>
    );
  }
}

export default App
